/**
 * Navbar.jsx — Official Loctite Header
 *
 * Replicates the authentic header seen on loctiteproducts.com:
 * 1. Topmost Utility Banner:
 *    - Authentic LOCTITE Red background (#E1000F)
 *    - Right aligned:
 *      - Social icons: Facebook, Instagram, TikTok, YouTube (crisp white)
 *      - Links: Where to Buy, About LOCTITE, Contact (white text, clean spacing)
 * 2. Main Navigation Bar:
 *    - White background (#FFFFFF)
 *    - Left:
 *      - LOCTITE® official slanted red logo badge
 *      - Main navigation links: PRODUCTS, KNOW HOW, SUSTAINABILITY, OUR ACTIONS, PRO
 *    - Right:
 *      - Globe icon (country/language)
 *      - Search icon
 *      - Mobile hamburger toggle (on smaller viewports)
 *    - (No redundant "Where to Buy" button on the right)
 * 3. Mobile Navigation Drawer with complete link access
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-navbar">
      {/* 
        Topmost Utility Banner (Official Loctite Red #E1000F, hidden on mobile)
        Matches loctiteproducts.com
      */}
      <div
        id="banner1726647016"
        className="banner__base banner__base--hidden-mobile banner1709917227685 site-top-banner"
        data-components-params-stickybanner='{"hide":"Mobile","headerIsSticky":true,"stickyAtBottom":false}'
        data-components="StickyBanner"
      >
        <div className="site-top-banner__container">
          {/* Social Icons matching reference */}
          <div className="site-top-banner__socials" aria-label="Social Media">
            <a
              href="https://www.facebook.com/profile.php?id=100084344770371"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__social-link"
              aria-label="Loctite on Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.7v-7.8h-2.6v-3h2.6V7.9c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.3 0-1.7.8-1.7 1.6V10.2h2.7l-.4 3h-2.3V21H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/loctiteglue/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__social-link"
              aria-label="Loctite on Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@loctiteglue"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__social-link"
              aria-label="Loctite on TikTok"
              title="TikTok"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.044.87.13V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.49V8.62a8.28 8.28 0 0 0 4.91 1.6V6.75c-.34-.02-.67-.04-1-.06z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@_loctiteglue"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__social-link"
              aria-label="Loctite on YouTube"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Links: Where to Buy, About LOCTITE, Contact */}
          <nav className="site-top-banner__links" aria-label="Utility Links">
            <Link
              to="/where-to-buy"
              className={`site-top-banner__link ${
                location.pathname === "/where-to-buy" ? "active" : ""
              }`}
            >
              Where to Buy
            </Link>

            <a
              href="https://www.loctiteproducts.com/about-loctite.html"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__link"
            >
              About LOCTITE
            </a>

            <a
              href="https://www.loctiteproducts.com/meta/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="site-top-banner__link"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Main Navbar Bar (Matches OG reference exactly) */}
      <div className="site-navbar__inner">
        {/* Left: Official LOCTITE Slanted Red Badge + Nav Links */}
        <div className="site-navbar__left">
          <Link to="/" aria-label="LOCTITE Home" className="site-navbar__logo-link">
            <div className="loctite-logo-badge">
              <span className="loctite-logo-text">
                LOCTITE<sup className="loctite-logo-r">®</sup>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links: PRODUCTS, KNOW HOW, SUSTAINABILITY, OUR ACTIONS, PRO */}
          <nav className="site-navbar__nav-links" aria-label="Main Navigation">
            <Link
              to="/"
              className={`site-navbar__link ${location.pathname === "/" ? "active" : ""}`}
            >
              Products
            </Link>
            <Link
              to="/guide"
              className={`site-navbar__link ${location.pathname === "/guide" ? "active" : ""}`}
            >
              Know How
            </Link>
            <a
              href="https://www.loctiteproducts.com/sustainability.html"
              target="_blank"
              rel="noopener noreferrer"
              className="site-navbar__link"
            >
              Sustainability
            </a>
            <a
              href="https://www.loctiteproducts.com/our-actions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="site-navbar__link"
            >
              Our Actions
            </a>
            <Link
              to="/"
              className="site-navbar__link"
              onClick={() => {
                const el = document.querySelector(".persona-btn:last-child");
                if (el) el.click();
              }}
            >
              Pro
            </Link>
          </nav>
        </div>

        {/* Right: Globe & Search icons (and mobile hamburger toggle) */}
        <div className="site-navbar__right">
          <button
            className="site-navbar__icon-btn"
            aria-label="Select Region / Language"
            title="Global / English (US)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          <button
            className="site-navbar__icon-btn"
            aria-label="Search Loctite products"
            title="Search"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            className="site-navbar__icon-btn site-navbar__hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="site-navbar__mobile-drawer"
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "2px solid var(--color-brand-red)",
            padding: "18px 20px 24px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: location.pathname === "/" ? "var(--color-brand-red)" : "var(--color-text-primary)",
              }}
            >
              Products
            </Link>
            <Link
              to="/guide"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: location.pathname === "/guide" ? "var(--color-brand-red)" : "var(--color-text-primary)",
              }}
            >
              Know How (Repair Guide)
            </Link>
            <a
              href="https://www.loctiteproducts.com/sustainability.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
              }}
            >
              Sustainability
            </a>
            <a
              href="https://www.loctiteproducts.com/our-actions.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
              }}
            >
              Our Actions
            </a>
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.querySelector(".persona-btn:last-child");
                if (el) el.click();
              }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: "var(--color-text-primary)",
              }}
            >
              Pro Solutions
            </Link>

            <div style={{ height: "1px", backgroundColor: "var(--color-border)", margin: "4px 0" }} />

            <Link
              to="/where-to-buy"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
                color: location.pathname === "/where-to-buy" ? "var(--color-brand-red)" : "var(--color-text-primary)",
              }}
            >
              Where to Buy
            </Link>

            <a
              href="https://www.loctiteproducts.com/about-loctite.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-text-secondary)",
              }}
            >
              About LOCTITE ↗
            </a>
            <a
              href="https://www.loctiteproducts.com/meta/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-text-secondary)",
              }}
            >
              Contact ↗
            </a>

            {/* Social icons row in mobile drawer */}
            <div style={{ display: "flex", gap: "16px", paddingTop: "8px", color: "var(--color-brand-red)" }}>
              <a href="https://www.facebook.com/profile.php?id=100084344770371" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.7v-7.8h-2.6v-3h2.6V7.9c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.3 0-1.7.8-1.7 1.6V10.2h2.7l-.4 3h-2.3V21H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/loctiteglue/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@loctiteglue" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.044.87.13V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.86-4.49V8.62a8.28 8.28 0 0 0 4.91 1.6V6.75c-.34-.02-.67-.04-1-.06z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@_loctiteglue" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div style={{ height: "1px", backgroundColor: "var(--color-border)", margin: "4px 0" }} />
            <Link
              to="/guide"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn--primary btn--sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Start Product Finder →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
