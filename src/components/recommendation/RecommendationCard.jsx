import { ProductPackshot } from "../common/ProductPackshot.jsx";

export function RecommendationCard({ product }) {
  return (
    <div className="rec-product-card animate-scale-in">
      {/* Product image packshot */}
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <ProductPackshot productId={product.id} name={product.name} />
      </div>

      {/* Status badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
        <span className="badge badge--green">✓ &nbsp;Best LOCTITE Match</span>
      </div>

      {/* Product name */}
      <h2
        className="heading-xl"
        style={{ textAlign: "center", marginBottom: "8px", lineHeight: "1.2" }}
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
