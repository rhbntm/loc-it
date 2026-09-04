/**
 * Recommendation — Result page
 *
 * Displays:
 *   - Matched product (or no-match/needs-more-info message)
 *   - "Why this match?" reasons
 *   - Usage instructions
 *   - Proof / demo section
 *   - Purchase CTA (Shopee, TikTok Shop, Find a Store)
 *
 * Increments covered: 5 (UI), 6 (Commerce), 7 (Analytics)
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { recommendProduct } from "../logic/recommendProduct.js";
import { products } from "../data/products.js";
import { trackEvent } from "../utils/analytics.js";

import { RecommendationCard } from "../components/recommendation/RecommendationCard.jsx";
import { ReasonList } from "../components/recommendation/ReasonList.jsx";
import { UsageGuide } from "../components/recommendation/UsageGuide.jsx";
import { ProofSection } from "../components/recommendation/ProofSection.jsx";

const PLATFORM_ICONS = {
  Shopee: "🛍️",
  "TikTok Shop": "📱",
  "Find a Store": "📍",
};

export function Recommendation({ repairRequest, onReset }) {
  const navigate = useNavigate();

  // Run the recommendation engine
  const result = recommendProduct(products, repairRequest);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    trackEvent("recommendation_generated", {
      status: result.status,
      productId: result.product?.id ?? null,
      score: result.score,
      ...repairRequest,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handlePurchaseClick(platform, url) {
    trackEvent("purchase_cta_clicked", {
      platform,
      productId: result.product?.id,
    });
    if (url && url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate("/where-to-buy");
    }
  }

  function handleReset() {
    onReset();
    navigate("/");
  }

  function handleRetry() {
    navigate("/guide");
  }

  // --- No match / needs more info ---
  if (result.status !== "recommended") {
    return (
      <div className="page">
        <nav className="site-subnav" aria-label="Recommendation Navigation">
          <button
            onClick={() => navigate(-1)}
            className="site-subnav__btn"
            aria-label="Go back"
          >
            <span>‹</span>
            <span>BACK</span>
          </button>
          <div className="site-subnav__center">
            <span>REPAIR RECOMMENDATION</span>
          </div>
          <button
            onClick={handleReset}
            className="site-subnav__btn"
            style={{ color: "var(--color-text-muted)" }}
            aria-label="Start over"
          >
            Reset ✕
          </button>
        </nav>

        <main id="main-content" className="rec-container">
          <div className="no-match-box animate-scale-in">
            <div className="no-match-icon" aria-hidden="true">🔍</div>

            {result.status === "needs-more-information" ? (
              <>
                <h2 className="heading-xl" style={{ marginBottom: "12px" }}>
                  We Need a Bit More Detail
                </h2>
                <p className="body-md text-muted" style={{ maxWidth: "520px", margin: "0 auto 28px" }}>
                  To pinpoint the exact Henkel LOCTITE® formulation for your repair, please complete
                  all questionnaire steps — especially the bonding material and gap profile.
                </p>
              </>
            ) : (
              <>
                <h2 className="heading-xl" style={{ marginBottom: "12px" }}>
                  Specialist Consultation Needed
                </h2>
                <p className="body-md text-muted" style={{ maxWidth: "520px", margin: "0 auto 28px" }}>
                  This combination represents an uncommon industrial or heavy-duty bond scenario.
                  Try adjusting your repair fit options, or explore our heavy-duty construction adhesive line.
                </p>
              </>
            )}

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button id="btn-retry-guide" className="btn btn--primary" onClick={handleRetry}>
                Refine Questionnaire →
              </button>
              <button id="btn-reset-from-nomatch" className="btn btn--outline" onClick={handleReset}>
                Start Over
              </button>
              <button
                className="btn btn--secondary"
                onClick={() => navigate("/where-to-buy")}
              >
                Browse Store Locator
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const { product, reasons } = result;

  return (
    <div className="page">
      {/* Subnav */}
      <nav className="site-subnav" aria-label="Recommendation Navigation">
        <button
          onClick={() => navigate("/guide")}
          className="site-subnav__btn"
          aria-label="Back to guide"
        >
          <span>‹</span>
          <span>REPAIR GUIDE</span>
        </button>
        <div className="site-subnav__center">
          <span>RECOMMENDED FOR YOU</span>
        </div>
        <button
          id="btn-reset-from-rec"
          onClick={handleReset}
          className="site-subnav__btn"
          style={{ color: "var(--color-text-muted)" }}
          aria-label="Start over"
        >
          Reset ✕
        </button>
      </nav>

      <main id="main-content" className="rec-container">
        {/* Product showcase hero card */}
        <RecommendationCard product={product} />

        {/* Why this match */}
        <div className="animate-fade-up animate-fade-up--delay-1">
          <ReasonList reasons={reasons} />
        </div>

        {/* How to use step timeline */}
        <div className="animate-fade-up animate-fade-up--delay-2">
          <UsageGuide usageSteps={product.usageSteps} />
        </div>

        {/* See it in action interactive proof */}
        <div className="animate-fade-up animate-fade-up--delay-3">
          <ProofSection proof={product.proof} />
        </div>

        {/* GET LOCTITE — Authorized Retailers & Commerce */}
        <div className="rec-section-card animate-fade-up animate-fade-up--delay-4">
          <div className="rec-section-header">
            <h3 className="rec-section-title">
              <span>🛒</span>
              <span>Where to Buy LOCTITE®</span>
            </h3>
            <span className="badge badge--green">Official Stockists</span>
          </div>

          <p className="body-md text-muted" style={{ marginBottom: "20px" }}>
            Purchase genuine LOCTITE adhesives online with fast delivery, or check in-store stock at your local hardware supplier.
          </p>

          <div className="purchase-cta-grid">
            {product.purchaseLinks.map(({ platform, type, url }) => (
              <button
                id={`btn-purchase-${platform.toLowerCase().replace(/\s+/g, "-")}`}
                key={platform}
                type="button"
                className="purchase-channel-card"
                onClick={() => handlePurchaseClick(platform, url)}
                aria-label={`Buy on ${platform} (${type})`}
              >
                <div className="purchase-channel-top">
                  <div className="purchase-channel-icon">
                    {PLATFORM_ICONS[platform] ?? "🛍️"}
                  </div>
                  <div>
                    <div className="purchase-channel-name">{platform}</div>
                    <div className="purchase-channel-type">{type}</div>
                  </div>
                </div>
                <div className="purchase-channel-bottom">
                  <span>Check Availability</span>
                  <span>↗</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Quick Actions Footer */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
          <button
            id="btn-start-over"
            className="btn btn--outline"
            onClick={handleReset}
          >
            Start a New Repair
          </button>
          <button
            className="btn btn--secondary"
            onClick={() => navigate("/where-to-buy")}
          >
            Find Nearby Hardware Stores
          </button>
        </div>
      </main>
    </div>
  );
}

export default Recommendation;

