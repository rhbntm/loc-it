/**
 * ReasonList — "Why this match?" human-readable explanation
 */

export function ReasonList({ reasons }) {
  if (!reasons || reasons.length === 0) return null;

  return (
    <div>
      <p className="section-label">Why this match?</p>
      <div className="reasons-list">
        {reasons.map((reason, i) => (
          <div key={i} className="reason-item">
            <div className="reason-item__dot" />
            <p className="reason-item__text">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReasonList;
