import React, { useEffect } from "react";

import { products } from "../data/products";

import ProductPageHero from "../components/productsPage/ProductPageHero";
import ProductPageNav from "../components/productsPage/ProductPageNav";
import ProductPageSection from "../components/productsPage/ProductPageSection";

import HomeBackground from "../components/HomeBackground";

import ProductPageEnd from "../sections/ProjectPageEnd";

const Products = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const navbar = document.querySelector(".navbar-global");

      if (!navbar) return;

      // At very top: always show navbar
      if (currentScrollY < 80) {
        navbar.classList.remove("products-navbar-hidden");
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down
      if (currentScrollY > lastScrollY) {
        navbar.classList.add("products-navbar-hidden");
      }

      // Scrolling up
      else {
        navbar.classList.remove("products-navbar-hidden");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      // IMPORTANT:
      // restore navbar when leaving Products page
      const navbar = document.querySelector(".navbar-global");

      navbar?.classList.remove("products-navbar-hidden");
    };
  }, []);

  return (
    <main className="products-page relative min-h-screen text-white">
      {" "}
      <HomeBackground />
      <div className="relative z-10">
        {/* HERO */}
        <ProductPageHero />

        {/* PRODUCT NAVIGATION */}
        <ProductPageNav products={products} />

        {/* PRODUCTS */}
        {products.map((product, index) => (
          <ProductPageSection
            key={product.id}
            product={product}
            index={index}
          />
        ))}

        {/* FINAL SECTION */}
        <ProductPageEnd />
      </div>
    </main>
  );
};

export default Products;
