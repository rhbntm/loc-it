/**
 * UsageGuide — "HOW TO USE" step-by-step instructions
 *
 * Uses clearly labeled prototype copy until official instructions are verified.
 */

export function UsageGuide({ usageSteps }) {
  if (!usageSteps || usageSteps.length === 0) return null;

  return (
    <div>
      <p className="section-label">How to use</p>
      <div className="step-list">
        {usageSteps.map(({ step, instruction }) => (
          <div key={step} className="step-item">
            <div className="step-number" aria-label={`Step ${step}`}>
              {step}
            </div>
            <p className="step-text">{instruction}</p>
          </div>
        ))}
      </div>
      <p
        className="body-sm"
        style={{
          marginTop: "12px",
          color: "var(--color-text-muted)",
          fontStyle: "italic",
          fontSize: "12px",
        }}
      >
        Prototype usage guide — verify against product label before use.
      </p>
    </div>
  );
}

export default UsageGuide;
