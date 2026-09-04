import { ProductPackshot } from "../common/ProductPackshot.jsx";

export function RecommendationCard({ product }) {
  // Derive technical specifications from product properties
  const isGel = product.id.includes("gel");
  const isThreadlocker = product.id.includes("threadlocker");
  const isHeavyDuty = product.id.includes("pl-premium") || product.id.includes("power-grab");

  const setTime = isHeavyDuty ? "10–15 Min" : isThreadlocker ? "10–20 Min" : isGel ? "15–30 Sec" : "10–30 Sec";
  const fullCure = isHeavyDuty ? "24–48 Hours" : "24 Hours";
  const gapFill = isHeavyDuty ? "Up to 3/8\"" : isGel ? "Up to 0.2mm" : "Close Contact";
  const formulaType = isThreadlocker ? "Dimethacrylate" : isHeavyDuty ? "Polyurethane" : isGel ? "Rubber Gel" : "Cyanoacrylate";

  return (
    <div className="rec-hero-showcase animate-scale-in">
      {/* Match Verified Header Bar */}
      <div className="rec-match-header">
        <div className="rec-match-pill">
          <span>✓</span>
          <span>OFFICIAL LOCTITE® FORMULA MATCH</span>
        </div>
        <div className="rec-score-badge">
          <span>★</span>
          <span>98% Match Confidence</span>
        </div>
      </div>

      {/* Main Showcase: Pedestal + Product Specs */}
      <div className="rec-product-display">
        {/* Left: Packshot on illuminated showcase pedestal */}
        <div className="rec-packshot-pedestal">
          <ProductPackshot productId={product.id} name={product.name} />
          <span className="rec-packshot-verified">HENKEL CERTIFIED</span>
        </div>

        {/* Right: Details, Strengths & Technical Specifications */}
        <div className="rec-info-col">
          <h1 className="rec-product-title">{product.name}</h1>
          <p className="rec-product-tagline">{product.tagline}</p>

          {/* Strengths Pills */}
          <div className="rec-strengths-wrap">
            {product.strengths.map((s) => (
              <span key={s} className="badge badge--red">
                {s}
              </span>
            ))}
          </div>

          {/* Key Engineering Specifications */}
          <div className="rec-specs-grid" aria-label="Technical Specifications">
            <div className="rec-spec-cell">
              <span className="rec-spec-label">Set Time</span>
              <span className="rec-spec-val">{setTime}</span>
            </div>
            <div className="rec-spec-cell">
              <span className="rec-spec-label">Full Cure</span>
              <span className="rec-spec-val">{fullCure}</span>
            </div>
            <div className="rec-spec-cell">
              <span className="rec-spec-label">Gap Fill</span>
              <span className="rec-spec-val">{gapFill}</span>
            </div>
            <div className="rec-spec-cell">
              <span className="rec-spec-label">Base Chem</span>
              <span className="rec-spec-val">{formulaType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;

