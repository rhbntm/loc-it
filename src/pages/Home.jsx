/**
 * Home.jsx — Official LOCTITE Landing Page
 *
 * 1. Hero banner with DIYer / PRO toggle pill and dynamic headline
 * 2. "Choose your project and find the right product" with 4 red category circles:
 *    - CREATE-CRAFT (Scissors & glue bottle)
 *    - INSTALL (Window frame)
 *    - RENOVATE (Tiled herringbone wall)
 *    - REPAIR (Broken item)
 * 3. "YOUR RESULTS" catalog with active filter tags, rating stars, specs, and CTAs
 */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { products } from "../data/products.js";
import { ProductPackshot } from "../components/common/ProductPackshot.jsx";
import { trackEvent } from "../utils/analytics.js";
import diyHeroDesktop from "../assets/DIY-Homepage-Desktop.png";

const CATEGORIES = [
  {
    id: "create-craft",
    label: "CREATE-CRAFT",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        {/* Scissors */}
        <circle cx="14" cy="34" r="5" />
        <circle cx="24" cy="34" r="5" />
        <line x1="17.5" y1="30" x2="28" y2="14" />
        <line x1="20.5" y1="30" x2="10" y2="14" />
        {/* Glue Bottle */}
        <path d="M 33 22 L 41 22 L 41 42 L 33 42 Z" rx="2" />
        <path d="M 35 22 L 35 15 L 39 15 L 39 22" />
        <polygon points="36,15 37,8 38,15" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "install",
    label: "INSTALL",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        {/* Window Frame */}
        <rect x="10" y="8" width="28" height="32" rx="1" strokeWidth="3" />
        <line x1="24" y1="8" x2="24" y2="40" strokeWidth="2.5" />
        <line x1="10" y1="24" x2="38" y2="24" strokeWidth="2.5" />
        <line x1="8" y1="40" x2="40" y2="40" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "renovate",
    label: "RENOVATE",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        {/* Tiled / Herringbone Brick Pattern */}
        <rect x="10" y="8" width="28" height="32" rx="2" />
        <line x1="10" y1="18" x2="38" y2="18" />
        <line x1="10" y1="28" x2="38" y2="28" />
        <line x1="24" y1="8" x2="24" y2="18" />
        <line x1="18" y1="18" x2="18" y2="28" />
        <line x1="32" y1="18" x2="32" y2="28" />
        <line x1="24" y1="28" x2="24" y2="40" />
      </svg>
    ),
  },
  {
    id: "repair",
    label: "REPAIR",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        {/* Broken wallet / item with crack */}
        <rect x="9" y="12" width="30" height="24" rx="3" strokeWidth="2.5" />
        <circle cx="32" cy="24" r="2.5" fill="currentColor" />
        {/* Crack zigzag line */}
        <polyline points="18,12 22,20 17,26 23,36" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export function Home({ onStart }) {
  const [persona, setPersona] = useState("diy"); // 'diy' | 'pro'
  const [selectedCategory, setSelectedCategory] = useState("create-craft"); // default active category like in screenshot
  const navigate = useNavigate();

  function handleCategoryClick(categoryId) {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    trackEvent("category_selected", { category: categoryId });

    // Smooth scroll down to results section
    const resultsElem = document.getElementById("results-section");
    if (resultsElem) {
      resultsElem.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleStartGuide() {
    trackEvent("guide_started", { persona, selectedCategory });
    onStart();
    navigate("/guide");
  }

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.projectCategories?.includes(selectedCategory))
    : products;

  return (
    <div className="page">
      {/* Hero Section with Authentic DIY Image */}
      <section className={`loctite-hero ${persona === "diy" ? "loctite-hero--diy" : "loctite-hero--pro"}`}>
        {/* Authentic DIY Homepage Hero Image from loctiteproducts.com */}
        {persona === "diy" && (
          <img
            src={diyHeroDesktop}
            alt="LOCTITE Ultra Liquid Control in Action"
            className="loctite-hero__bg-img"
          />
        )}
        <div className="loctite-hero__bg-overlay" />

        <div className="container loctite-hero__content">
          <div>
            {/* Persona Switch: [ I'm a DIYer ] [ I'm a PRO ] */}
            <div className="persona-toggle-wrapper">
              <button
                className={`persona-btn ${persona === "diy" ? "active" : ""}`}
                onClick={() => setPersona("diy")}
              >
                I'm a DIYer
              </button>
              <button
                className={`persona-btn ${persona === "pro" ? "active" : ""}`}
                onClick={() => setPersona("pro")}
              >
                I'm a PRO
              </button>
            </div>

            {/* Dynamic Headline */}
            <h1 className="loctite-hero__title">
              LOCTITE
              <br />
              <span style={{ color: "#FFFFFF" }}>
                {persona === "diy" ? "Install & Repair" : "Pro Solutions"}
              </span>
            </h1>

            <p className="loctite-hero__subtitle">
              {persona === "diy"
                ? "Find the perfect solution for all your project needs — from household fixes and precision crafting to heavy-duty construction."
                : "Industrial-strength threadlockers, retainers, and specialty sealants engineered for demanding mechanical assemblies."}
            </p>

            {/* CTAs */}
            <div className="loctite-hero__cta-row">
              <button
                id="btn-hero-guide"
                className="btn btn--primary btn--lg"
                onClick={handleStartGuide}
              >
                Start Repair Guide →
              </button>

            </div>
          </div>

          {/* Hero Feature Area: DIY in-action callout vs PRO packshot card */}
          {persona === "diy" ? (
            <div className="loctite-hero__feature-badge-wrap">
              <div className="loctite-hero__feature-badge">
                <div className="loctite-hero__callout-pulse" />
                <div>
                  <span className="loctite-hero__callout-tag">FEATURED IN ACTION</span>
                  <h4 className="loctite-hero__callout-title">LOCTITE® Ultra Liquid Control</h4>
                  <p className="loctite-hero__callout-desc">
                    Patented side-squeeze grips for pinpoint accuracy. Bonds in seconds.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="loctite-hero__pro-card-wrap">
              <div className="loctite-hero__pro-card">
                <ProductPackshot productId="threadlocker-blue-242" name="Threadlocker 242" />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "20px",
                    marginTop: "16px",
                    color: "#FFFFFF",
                  }}
                >
                  LOCTITE Threadlocker 242
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.7)", marginTop: "6px" }}>
                  Medium strength. Prevents vibration loosening. Removable with hand tools.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* "Choose your project and find the right product" */}
      <section className="project-selector-section">
        <div className="container">
          <h2 className="project-selector-title">
            Choose your project and find the right product
          </h2>

          <div className="project-circles-grid" role="tablist">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`project-circle-item ${isActive ? "active" : ""}`}
                  onClick={() => handleCategoryClick(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="project-circle-btn">
                    {cat.icon}
                  </div>
                  <span className="project-circle-label">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* "YOUR RESULTS" Catalog Section */}
      <section className="results-section" id="results-section">
        <div className="container">
          <div className="results-header">
            <div className="results-title-group">
              <h3 className="results-title">YOUR RESULTS</h3>
              <span className="results-count">
                {filteredProducts.length} Product{filteredProducts.length === 1 ? "" : "s"}
              </span>
            </div>

            {/* Active Filters */}
            <div className="results-filters-row">
              <button
                className={`filter-chip ${!selectedCategory ? "active" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                All Products
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-chip ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.label}
                  {selectedCategory === cat.id && <span className="filter-chip__remove">✕</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <article key={prod.id} className="product-card">
                {/* Packshot Image */}
                <div className="product-card__image-wrap">
                  {prod.categoryBadge && (
                    <span className="product-card__badge">{prod.categoryBadge}</span>
                  )}
                  <div className="product-card__packshot">
                    <ProductPackshot productId={prod.id} name={prod.name} />
                  </div>
                </div>

                {/* Info */}
                <span className="product-card__tagline">{prod.shortName}</span>
                <h4 className="product-card__name">{prod.name}</h4>

                {/* Rating */}
                <div className="product-card__rating">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="product-card__rating-text">
                    {prod.rating} ({prod.reviewsCount})
                  </span>
                </div>

                {/* Description */}
                <p className="product-card__desc">{prod.description}</p>

                {/* Chips */}
                <div className="product-card__chips">
                  {prod.strengths.slice(0, 2).map((s, idx) => (
                    <span key={idx} className="product-card__chip">
                      ✓ {s}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="product-card__actions">
                  <Link
                    to="/where-to-buy"
                    className="btn btn--outline-red btn--sm"
                    style={{ width: "100%" }}
                  >
                    Where to Buy
                  </Link>
                  <button
                    className="btn btn--primary btn--sm"
                    onClick={handleStartGuide}
                    style={{ width: "100%" }}
                  >
                    Repair Guide
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
