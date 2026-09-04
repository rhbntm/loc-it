/**
 * UsageGuide — "HOW TO USE" step-by-step instructions
 */

const STEP_TITLES = [
  "PREPARE & CLEAN",
  "APPLY SPARINGLY",
  "ALIGN & PRESS",
  "ALLOW FULL CURE",
];

export function UsageGuide({ usageSteps }) {
  if (!usageSteps || usageSteps.length === 0) return null;

  return (
    <div className="rec-section-card">
      <div className="rec-section-header">
        <h3 className="rec-section-title">
          <span>🛠️</span>
          <span>How to Apply</span>
        </h3>
        <span className="badge badge--gray">4 Step Guide</span>
      </div>

      <div className="usage-timeline">
        {usageSteps.map(({ step, instruction }) => {
          const title = STEP_TITLES[step - 1] || `STEP ${step}`;
          return (
            <div key={step} className="usage-step-card">
              <div className="usage-step-num" aria-label={`Step ${step}`}>
                {step}
              </div>
              <div className="usage-step-content">
                <h4 className="usage-step-title">{title}</h4>
                <p className="usage-step-desc">{instruction}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="usage-callout-box">
        <span style={{ fontSize: "18px" }}>💡</span>
        <div>
          <strong>LOCTITE Application Tip:</strong> Less is more! A single drop bonds 1 sq. inch.
          Parts must be tightly clamped or held for the initial set time, then allowed 24h for maximum shear strength.
        </div>
      </div>
    </div>
  );
}

export default UsageGuide;

