import React, { useEffect } from "react";

import { products } from "../data/products";

import ProductPageHero from "../components/productsPage/ProductPageHero";
import ProductPageNav from "../components/productsPage/ProductPageNav";
import ProductPageSection from "../components/productsPage/ProductPageSection";

import HomeBackground from "../components/HomeBackground";

import ProductPageEnd from "../sections/ProjectPageEnd";

const Products = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const id = hash.substring(1);

    const timeout = setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
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