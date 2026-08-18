import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================
   ENVIRONMENT
========================================= */

const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5173";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;

/* =========================================
   BASIC ENV CHECK
========================================= */

if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
  console.error(
    "Missing EMAIL_USER or EMAIL_APP_PASSWORD in .env"
  );

  process.exit(1);
}

/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

/* =========================================
   CONTACT RATE LIMITER
========================================= */

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 5,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many submissions. Please try again later.",
  },
});

/* =========================================
   GMAIL TRANSPORTER
========================================= */

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: EMAIL_USER,
    pass: EMAIL_APP_PASSWORD,
  },

  pool: true,

  maxConnections: 3,

  maxMessages: 100,
});

/* =========================================
   HTML ESCAPE
========================================= */

const escapeHtml = (value = "") => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/* =========================================
   INPUT NORMALIZATION
========================================= */

const cleanText = (value = "", maxLength = 1000) => {
  return String(value).trim().slice(0, maxLength);
};

/* =========================================
   EMAIL VALIDATION
========================================= */

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/* =========================================
   HEALTH CHECK
========================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Leo Foundary backend is running.",
  });
});

/* =========================================
   CONTACT FORM
========================================= */

app.post(
  "/api/contact",
  contactLimiter,
  async (req, res) => {
    try {
      const {
        name,
        email,
        services,
        message,
        company_website,
      } = req.body || {};

      /* =========================================
         HONEYPOT SPAM PROTECTION
      ========================================= */

      if (
        typeof company_website === "string" &&
        company_website.trim() !== ""
      ) {
        console.log("Spam submission blocked.");

        return res.status(400).json({
          success: false,
          message: "Invalid submission.",
        });
      }

      /* =========================================
         BASIC VALIDATION
      ========================================= */

      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string"
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid submission.",
        });
      }

      /* =========================================
         CLEAN INPUT
      ========================================= */

      const cleanName = cleanText(name, 100);

      const cleanEmail = cleanText(email, 254).toLowerCase();

      const cleanMessage = cleanText(message, 5000);

      /* =========================================
         REQUIRED FIELDS
      ========================================= */

      if (
        !cleanName ||
        !cleanEmail ||
        !cleanMessage
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Name, email and message are required.",
        });
      }

      /* =========================================
         EMAIL VALIDATION
      ========================================= */

      if (!isValidEmail(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address.",
        });
      }

      /* =========================================
         SERVICES VALIDATION
      ========================================= */

      if (
        !Array.isArray(services) ||
        services.length === 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Please select at least one service.",
        });
      }

      /* =========================================
         ALLOWED SERVICES
      ========================================= */

      const allowedServices = [
        "Website",
        "Web App",
        "AI",
        "CRM",
        "ERP",
        "Automation",
      ];

      const cleanServices = services
        .filter(
          (service) =>
            typeof service === "string" &&
            allowedServices.includes(service)
        )
        .slice(0, 6);

      if (cleanServices.length === 0) {
        return res.status(400).json({
          success: false,
          message:
            "Please select at least one valid service.",
        });
      }

      /* =========================================
         ESCAPED VALUES FOR HTML EMAIL
      ========================================= */

      const safeName = escapeHtml(cleanName);

      const safeEmail = escapeHtml(cleanEmail);

      const safeMessage = escapeHtml(cleanMessage).replace(
        /\n/g,
        "<br />"
      );

      const safeServices = cleanServices
        .map(escapeHtml)
        .join(", ");

      const serviceList = cleanServices.join(", ");

      /* =========================================
         EMAIL TO LEO FOUNDARY
      ========================================= */

      const ownerEmail = {
        from: `"Leo Foundary Website" <${EMAIL_USER}>`,

        to: EMAIL_USER,

        replyTo: cleanEmail,

        subject: `New inquiry from ${cleanName}`,

        text: `
New project inquiry

Name:
${cleanName}

Email:
${cleanEmail}

Services:
${serviceList}

Message:
${cleanMessage}
        `,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              max-width: 650px;
              margin: 0 auto;
              padding: 30px;
              color: #222;
            "
          >

            <h2 style="margin-bottom: 30px;">
              New project inquiry
            </h2>

            <p>
              <strong>Name:</strong><br />
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${safeEmail}
            </p>

            <p>
              <strong>Services:</strong><br />
              ${safeServices}
            </p>

            <p>
              <strong>Message:</strong><br />
              ${safeMessage}
            </p>

          </div>
        `,
      };

      /* =========================================
         AUTO REPLY
      ========================================= */

      const autoReplyEmail = {
        from: `"Leo Foundary" <${EMAIL_USER}>`,

        to: cleanEmail,

        subject:
          "We received your inquiry — Leo Foundary",

        text: `
Hi ${cleanName},

Thanks for reaching out to Leo Foundary.

We've received your inquiry and our team will review the details you've shared.

We'll get back to you as soon as possible.

Best,
Leo Foundary

leofoundary@gmail.com
        `,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              color: #222;
              line-height: 1.7;
            "
          >

            <h1
              style="
                font-size: 28px;
                font-weight: 500;
                margin-bottom: 28px;
              "
            >
              Thanks for reaching out.
            </h1>

            <p>
              Hi ${safeName},
            </p>

            <p>
              Thanks for contacting
              <strong>Leo Foundary</strong>.
            </p>

            <p>
              We've received your project inquiry
              and our team will review the details
              you've shared.
            </p>

            <p>
              We'll get back to you as soon as possible.
            </p>

            <p style="margin-top: 35px;">
              Best,<br />
              <strong>Leo Foundary</strong>
            </p>

            <p
              style="
                color: #777;
                font-size: 13px;
                margin-top: 25px;
              "
            >
              leofoundary@gmail.com
            </p>

          </div>
        `,
      };

      /* =========================================
         SEND BOTH EMAILS
      ========================================= */

      await Promise.all([
        transporter.sendMail(ownerEmail),
        transporter.sendMail(autoReplyEmail),
      ]);

      console.log(
        `Contact submission processed successfully from ${cleanEmail}`
      );

      /* =========================================
         SUCCESS RESPONSE
      ========================================= */

      return res.status(200).json({
        success: true,
        message:
          "Inquiry submitted successfully.",
      });

    } catch (error) {
      console.error(
        "CONTACT API ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to process your inquiry right now. Please try again later.",
      });
    }
  }
);

/* =========================================
   404 HANDLER
========================================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found.",
  });
});

/* =========================================
   GLOBAL ERROR HANDLER
========================================= */

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  res.status(500).json({
    success: false,
    message: "Something went wrong.",
  });
});

/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {
  console.log(
    `Leo Foundary backend running on port ${PORT}`
  );

  console.log(
    `Frontend allowed: ${FRONTEND_URL}`
  );
});