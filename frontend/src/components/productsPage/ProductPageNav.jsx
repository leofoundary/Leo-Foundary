import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/ProductNav.css";

const ProductPageNav = ({ products }) => {
  const [activeProduct, setActiveProduct] = useState(
    products[0]?.id || null
  );

  const [visible, setVisible] = useState(true);

  /* =========================================
     ACTIVE PRODUCT DETECTION
  ========================================= */

  useEffect(() => {
    if (!products?.length) return;

    const sections = products
      .map((product) => document.getElementById(product.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveProduct(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [products]);

  /* =========================================
     SHOW WHEN SCROLLING UP
     HIDE WHEN SCROLLING DOWN
     
     THIS EFFECT ONLY EXISTS ON /products
  ========================================= */

  useEffect(() => {
    let previousY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;

        /* Always show near top */
        if (currentY < 120) {
          setVisible(true);
          previousY = currentY;
          ticking = false;
          return;
        }

        const difference = currentY - previousY;

        /* Ignore tiny movements */
        if (Math.abs(difference) > 6) {
          if (difference > 0) {
            setVisible(false);
          } else {
            setVisible(true);
          }

          previousY = currentY;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLICK PRODUCT
  ========================================= */

  const handleClick = (event, productId) => {
    event.preventDefault();

    const section = document.getElementById(productId);

    if (!section) return;

    setActiveProduct(productId);
    setVisible(true);

    const navbarOffset = 120;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `/products#${productId}`
    );
  };

  if (!products?.length) {
    return null;
  }

  return (
    <div
      className={`products-local-nav ${
        visible
          ? "products-local-nav-visible"
          : "products-local-nav-hidden"
      }`}
    >
      <div className="products-local-nav-bar">
        <div className="products-local-nav-content">
          <div className="products-local-nav-scroll">
            <div className="products-local-nav-list">
              {products.map((product) => {
                const active =
                  activeProduct === product.id;

                return (
                  <Link
                    key={product.id}
                    to={`/products#${product.id}`}
                    onClick={(event) =>
                      handleClick(
                        event,
                        product.id
                      )
                    }
                    className={`products-local-nav-item ${
                      active
                        ? "products-local-nav-item-active"
                        : ""
                    }`}
                  >
                    <span className="products-local-nav-window">
                      <span className="products-local-nav-track">
                        <span className="products-local-nav-text">
                          {product.title}
                        </span>

                        <span className="products-local-nav-text products-local-nav-text-second">
                          {product.title}
                        </span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageNav;