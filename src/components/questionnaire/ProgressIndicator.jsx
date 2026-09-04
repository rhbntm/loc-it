/**
 * ProgressIndicator — shows interactive step stepper and overall progress
 */

import { TOTAL_STEPS } from "../../data/questions.js";

const STEP_METADATA = [
  { step: 1, label: "Step 1", title: "Project Type" },
  { step: 2, label: "Step 2", title: "Material" },
  { step: 3, label: "Step 3", title: "Repair Fit" },
];

export function ProgressIndicator({ currentStep, onStepClick }) {
  const percent = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="progress-stepper" role="region" aria-label="Questionnaire Progress">
      {/* 3 Step Indicator Pills */}
      <div className="progress-steps-row">
        {STEP_METADATA.map((meta) => {
          const isDone = meta.step < currentStep;
          const isActive = meta.step === currentStep;
          const isClickable = isDone && typeof onStepClick === "function";

          let stepCls = "progress-step-item";
          if (isDone) stepCls += " progress-step-item--done";
          if (isActive) stepCls += " progress-step-item--active";
          if (isClickable) stepCls += " progress-step-item--clickable";

          return (
            <div
              key={meta.step}
              className={stepCls}
              onClick={() => {
                if (isClickable) onStepClick(meta.step);
              }}
              title={isClickable ? `Jump back to ${meta.title}` : undefined}
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={(e) => {
                if (isClickable && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onStepClick(meta.step);
                }
              }}
            >
              <div className="progress-step-num" aria-hidden="true">
                {isDone ? "✓" : meta.step}
              </div>
              <div className="progress-step-info">
                <span className="progress-step-label">{meta.label}</span>
                <span className="progress-step-title">{meta.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Animated Fill Bar */}
      <div className="progress-bar-track" aria-hidden="true">
        <div
          className="progress-bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressIndicator;

