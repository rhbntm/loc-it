/**
 * RecommendationCard — displays the matched product header
 */

export function RecommendationCard({ product }) {
  return (
    <div className="rec-product-card animate-scale-in">
      <div className="rec-product-card__glow" />

      {/* Product image placeholder */}
      <div className="rec-product-image" aria-label="Product image placeholder">
        🧲
      </div>

      {/* Status badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
        <span className="badge badge--green">✓ &nbsp;Your Match</span>
      </div>

      {/* Product name */}
      <h2
        className="display-md"
        style={{ textAlign: "center", marginBottom: "8px", lineHeight: "1.1" }}
      >
        {product.name}
      </h2>

      {/* Tagline */}
      <p
        className="body-sm text-muted"
        style={{ textAlign: "center" }}
      >
        {product.tagline}
      </p>

      {/* Strengths chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        {product.strengths.map((s) => (
          <span key={s} className="badge badge--red">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RecommendationCard;
