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
        <div className="site-subnav">
          <button
            onClick={() => navigate(-1)}
            style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700 }}
          >
            <span>‹</span>
            <span>BACK</span>
          </button>
          <span style={{ fontSize: "12px", color: "var(--color-brand-red)", fontWeight: 700 }}>
            RECOMMENDATION
          </span>
          <button
            onClick={handleReset}
            style={{ fontSize: "12px", color: "var(--color-text-muted)", fontWeight: 600 }}
          >
            Reset
          </button>
        </div>

        <main id="main-content" className="container container--card" style={{ padding: "48px 20px" }}>
          <div className="guide-step-card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>

            {result.status === "needs-more-information" ? (
              <>
                <h2 className="heading-lg" style={{ marginBottom: "12px" }}>
                  We need a bit more info
                </h2>
                <p className="body-sm text-muted" style={{ marginBottom: "24px" }}>
                  To find the right LOCTITE for your repair, please answer all three
                  questions — especially the material and repair type.
                </p>
              </>
            ) : (
              <>
                <h2 className="heading-lg" style={{ marginBottom: "12px" }}>
                  No confident match found
                </h2>
                <p className="body-sm text-muted" style={{ marginBottom: "24px" }}>
                  We couldn't find a strong match for this repair in the prototype catalog.
                  Try adjusting your answers or consult a LOCTITE product specialist.
                </p>
              </>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button id="btn-retry-guide" className="btn btn--primary" onClick={handleRetry}>
                Try Again
              </button>
              <button id="btn-reset-from-nomatch" className="btn btn--outline" onClick={handleReset}>
                Start Over
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
      <div className="site-subnav">
        <button
          onClick={() => navigate("/guide")}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700 }}
        >
          <span>‹</span>
          <span style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}>REPAIR GUIDE</span>
        </button>
        <span style={{ fontSize: "12px", color: "var(--color-brand-red)", fontWeight: 700 }}>
          RECOMMENDED FOR YOU
        </span>
        <button
          id="btn-reset-from-rec"
          onClick={handleReset}
          style={{ fontSize: "12px", color: "var(--color-text-muted)", fontWeight: 600 }}
        >
          Reset
        </button>
      </div>

      <main id="main-content" className="container container--card" style={{ padding: "32px 20px 80px" }}>
        {/* Header */}
        <div className="rec-header animate-fade-up">
          <p className="section-label" style={{ marginBottom: "4px" }}>
            Your LOCTITE match
          </p>
        </div>

        {/* Product card */}
        <RecommendationCard product={product} />

        {/* Body sections */}
        <div className="rec-body">

          {/* Divider */}
          <div className="divider" />

          {/* Why this match */}
          <div className="animate-fade-up animate-fade-up--delay-1">
            <ReasonList reasons={reasons} />
          </div>

          <div className="divider" />

          {/* How to use */}
          <div className="animate-fade-up animate-fade-up--delay-2">
            <UsageGuide usageSteps={product.usageSteps} />
          </div>

          <div className="divider" />

          {/* See it in action */}
          <div className="animate-fade-up animate-fade-up--delay-3">
            <ProofSection proof={product.proof} />
          </div>

          <div className="divider" />

          {/* GET LOCTITE — Commerce CTA */}
          <div className="animate-fade-up animate-fade-up--delay-4">
            <p className="section-label">Get LOCTITE</p>
            <p className="body-sm text-muted" style={{ marginBottom: "16px" }}>
              Find this product online or at a store near you.
              Links are placeholders — official stores to be confirmed.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {product.purchaseLinks.map(({ platform, type, url }) => (
                <button
                  id={`btn-purchase-${platform.toLowerCase().replace(/\s+/g, "-")}`}
                  key={platform}
                  className="purchase-btn"
                  onClick={() => handlePurchaseClick(platform, url)}
                  aria-label={`Buy on ${platform} (${type})`}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="purchase-btn__icon">
                      {PLATFORM_ICONS[platform] ?? "🔗"}
                    </span>
                    <span>
                      <strong>{platform}</strong>
                      <br />
                      <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                        {type}
                      </span>
                    </span>
                  </span>
                  <span className="purchase-btn__arrow">›</span>
                </button>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Start over */}
          <div style={{ textAlign: "center" }}>
            <button
              id="btn-start-over"
              className="btn btn--outline"
              onClick={handleReset}
            >
              Start a New Repair
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Recommendation;
