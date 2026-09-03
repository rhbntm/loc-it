/**
 * ProgressIndicator — shows current step and overall progress
 */

import { TOTAL_STEPS } from "../../data/questions.js";

export function ProgressIndicator({ currentStep }) {
  const percent = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Bar */}
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${percent}%` }} />
      </div>

      {/* Dots + step label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="progress-dots">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => {
            const stepNum = i + 1;
            let cls = "progress-dot";
            if (stepNum < currentStep) cls += " progress-dot--done";
            else if (stepNum === currentStep) cls += " progress-dot--active";
            return <div key={stepNum} className={cls} />;
          })}
        </div>
        <span className="label text-dimmed">
          Step {currentStep} of {TOTAL_STEPS}
        </span>
      </div>
    </div>
  );
}

export default ProgressIndicator;
