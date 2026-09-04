/**
 * Footer.jsx — Official Loctite & Henkel Footer
 *
 * Replicates the footer of loctiteproducts.com
 */

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* Top: Logo & Socials */}
        <div className="site-footer__top">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="loctite-logo-badge loctite-logo-badge--small">
              <span className="loctite-logo-text">LOCTITE</span>
            </div>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
              A Henkel Brand
            </span>
          </div>

          {/* Social Icons */}
          <div className="site-footer__socials">
            <a
              href="https://www.tiktok.com/@loctiteglue"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social-link"
              aria-label="TikTok"
              title="Loctite TikTok"
            >
              📱
            </a>
            <a
              href="https://www.instagram.com/loctiteglue/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social-link"
              aria-label="Instagram"
              title="Loctite Instagram"
            >
              📸
            </a>
            <a
              href="https://www.youtube.com/@_loctiteglue"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social-link"
              aria-label="YouTube"
              title="Loctite YouTube"
            >
              ▶️
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social-link"
              aria-label="Facebook"
              title="Loctite Facebook"
            >
              👥
            </a>
          </div>
        </div>

        {/* Bottom: Legal & Nav Links */}
        <div className="site-footer__bottom">
          <div className="site-footer__links">
            <Link to="/" className="site-footer__link">Products</Link>
            <Link to="/guide" className="site-footer__link">Repair Guide</Link>
            <Link to="/where-to-buy" className="site-footer__link">Where to Buy</Link>
            <a href="https://www.henkel.com" target="_blank" rel="noopener noreferrer" className="site-footer__link">
              Henkel Corporation
            </a>
            <span className="site-footer__link">Privacy Policy</span>
            <span className="site-footer__link">Terms of Use</span>
          </div>

          <p>© {new Date().getFullYear()} Henkel Corporation. All rights reserved. LOCTITE® is a registered trademark.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
