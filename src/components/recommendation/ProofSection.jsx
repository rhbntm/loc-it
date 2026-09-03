/**
 * ProofSection — "SEE IT IN ACTION" demonstration area
 *
 * Contains a video placeholder and the 5-stage demo flow:
 * Problem → Apply → Set → Test → Result
 */

export function ProofSection({ proof }) {
  if (!proof) return null;

  return (
    <div>
      <p className="section-label">See it in action</p>

      <h3 className="heading-md" style={{ marginBottom: "12px" }}>
        {proof.title}
      </h3>

      {/* Video placeholder */}
      <div className="video-placeholder" role="img" aria-label="Demonstration video placeholder">
        <div className="video-play-btn" aria-hidden="true">▶</div>
        <p
          className="label"
          style={{ color: "var(--color-text-muted)", position: "relative" }}
        >
          Demo video — coming soon
        </p>
      </div>

      {/* Description */}
      <p
        className="body-sm text-muted"
        style={{ marginTop: "12px", marginBottom: "16px" }}
      >
        {proof.description}
      </p>

      {/* 5-stage proof flow chips */}
      {proof.demoSteps && (
        <div className="proof-steps" aria-label="Demonstration stages">
          {proof.demoSteps.map(({ label, desc }) => (
            <div key={label} className="proof-step-chip">
              <span className="proof-step-chip__label">{label}</span>
              <span className="proof-step-chip__desc">{desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProofSection;
