import React from "react";
import { motion } from "framer-motion";

import ContactBackground from "../components/ContactBackground";
import ContactForm from "../components/ContactForm";

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <ContactBackground />

      {/* CONTENT REVEAL */}
      <motion.div
        initial={{
          clipPath: "inset(0 0 100% 0)",
        }}
        animate={{
          clipPath: "inset(0 0 0% 0)",
        }}
        transition={{
          duration: 1.15,
          delay: 0.15,
          ease,
        }}
        className="relative z-10"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease,
          }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>

    </main>
  );
};

export default Contact;