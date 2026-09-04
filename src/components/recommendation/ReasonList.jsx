/**
 * ReasonList — "Why this match?" human-readable explanation
 */

export function ReasonList({ reasons }) {
  if (!reasons || reasons.length === 0) return null;

  return (
    <div className="rec-section-card">
      <div className="rec-section-header">
        <h3 className="rec-section-title">
          <span>🎯</span>
          <span>Why This Match?</span>
        </h3>
        <span className="badge badge--green">Algorithm Verified</span>
      </div>

      <div className="reasons-cards-list">
        {reasons.map((reason, i) => (
          <div key={i} className="reason-card">
            <div className="reason-card__icon" aria-hidden="true">✓</div>
            <p className="reason-card__text">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReasonList;

