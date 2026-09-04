/**
 * Guide — Three-step questionnaire page
 *
 * Manages step-by-step navigation, stores answers in repairRequest,
 * and routes to the recommendation page on completion.
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../data/questions.js";
import { ProgressIndicator } from "../components/questionnaire/ProgressIndicator.jsx";
import { QuestionCard } from "../components/questionnaire/QuestionCard.jsx";
import { trackEvent } from "../utils/analytics.js";

const QUESTION_KEYS = ["category", "material", "repairType"];

const STEP_NAMES = {
  category: "Project",
  material: "Material",
  repairType: "Repair Fit",
};

export function Guide({ repairRequest, onAnswer, onComplete, onReset }) {
  const navigate = useNavigate();

  // Restore to the last unanswered step on mount directly in state initializer
  const [currentStep, setCurrentStep] = useState(() => {
    const answeredCount = QUESTION_KEYS.filter((k) => repairRequest[k]).length;
    return Math.min(answeredCount + 1, questions.length);
  });

  // Ensure window is always at top on step transitions
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentStep]);

  const question = questions[currentStep - 1];
  const questionKey = QUESTION_KEYS[currentStep - 1];
  const selectedValue = repairRequest[questionKey] || null;

  function handleSelect(value) {
    onAnswer(questionKey, value);

    trackEvent("question_answered", {
      step: currentStep,
      questionId: question.id,
      value,
    });

    // Auto-advance after selection
    if (currentStep < questions.length) {
      setTimeout(() => setCurrentStep((s) => s + 1), 320);
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    } else {
      navigate("/");
    }
  }

  function handleSubmit() {
    const allAnswered = QUESTION_KEYS.every((k) => repairRequest[k]);
    if (!allAnswered) return;

    trackEvent("guide_completed", { ...repairRequest });
    onComplete();
    navigate("/recommendation");
  }

  function handleReset() {
    onReset();
    setCurrentStep(1);
    navigate("/");
  }

  const isLastStep = currentStep === questions.length;
  const canSubmit = isLastStep && selectedValue !== null;

  // Active answers for summary chips
  const answeredKeys = QUESTION_KEYS.filter((k, idx) => repairRequest[k] && idx + 1 < currentStep);

  return (
    <div className="page">
      {/* Subnav breadcrumb */}
      <nav className="site-subnav" aria-label="Questionnaire Navigation">
        <button
          id="btn-back"
          className="site-subnav__btn"
          onClick={handleBack}
          aria-label="Go back"
        >
          <span>‹</span>
          <span>BACK</span>
        </button>

        <div className="site-subnav__center">
          <span>STEP {currentStep} OF {questions.length}</span>
        </div>

        <button
          id="btn-reset"
          className="site-subnav__btn"
          onClick={handleReset}
          style={{ color: "var(--color-text-muted)" }}
          aria-label="Start over"
        >
          Reset ✕
        </button>
      </nav>

      {/* Main Questionnaire Container */}
      <div className="guide-shell">
        <div className="guide-card">
          {/* Segmented Stepper */}
          <ProgressIndicator
            currentStep={currentStep}
            onStepClick={(step) => setCurrentStep(step)}
          />

          {/* Answered Choices Summary Bar (Click to edit prior step) */}
          {answeredKeys.length > 0 && (
            <div className="answers-summary-bar">
              <span className="answers-summary-label">Selected:</span>
              {answeredKeys.map((k) => {
                const stepIdx = QUESTION_KEYS.indexOf(k) + 1;
                const qDef = questions.find((q) => q.id === k);
                const optDef = qDef?.options.find((o) => o.value === repairRequest[k]);
                return (
                  <button
                    key={k}
                    type="button"
                    className="answer-summary-chip"
                    onClick={() => setCurrentStep(stepIdx)}
                    title={`Click to change ${STEP_NAMES[k]}`}
                  >
                    <span>{optDef?.icon}</span>
                    <span>{STEP_NAMES[k]}: <strong>{optDef?.label || repairRequest[k]}</strong></span>
                    <span style={{ fontSize: "10px", color: "var(--color-text-muted)" }}>✎</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Question Body */}
          <main
            id="main-content"
            key={currentStep} /* Re-mount for smooth step transition animation */
          >
            <QuestionCard
              question={question}
              selectedValue={selectedValue}
              onSelect={handleSelect}
            />
          </main>

          {/* Footer Actions */}
          <div className="guide-footer-actions">
            <div className="guide-trust-badge">
              <span style={{ color: "var(--color-brand-red)", fontWeight: 800 }}>LOCTITE®</span>
              <span>Precision Formulation Engine</span>
            </div>

            <div>
              {isLastStep ? (
                <button
                  id="btn-find-my-loctite"
                  className="btn btn--primary"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                >
                  Find My LOCTITE →
                </button>
              ) : (
                selectedValue && (
                  <button
                    id={`btn-next-step-${currentStep}`}
                    className="btn btn--secondary"
                    onClick={() => setCurrentStep((s) => s + 1)}
                  >
                    Next Step →
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;

