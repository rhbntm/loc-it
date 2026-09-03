/**
 * Guide — Three-step questionnaire page
 *
 * Manages step-by-step navigation, stores answers in repairRequest,
 * and routes to the recommendation page on completion.
 *
 * State:
 *   - currentStep: which question is showing (1-indexed)
 *   - repairRequest: { category, material, repairType }
 *
 * Requirements:
 *   ✅ Store selected answer
 *   ✅ Allow Back navigation
 *   ✅ Preserve previous answers
 *   ✅ Allow changing previous answers
 *   ✅ Prevent submission until required question answered
 *   ✅ Reset clears the complete request
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../data/questions.js";
import { ProgressIndicator } from "../components/questionnaire/ProgressIndicator.jsx";
import { QuestionCard } from "../components/questionnaire/QuestionCard.jsx";
import { trackEvent } from "../utils/analytics.js";

const QUESTION_KEYS = ["category", "material", "repairType"];

export function Guide({ repairRequest, onAnswer, onComplete, onReset }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Restore to the last unanswered step on mount
  useEffect(() => {
    const answeredCount = QUESTION_KEYS.filter((k) => repairRequest[k]).length;
    // Start at the next unanswered step, capped at 3
    setCurrentStep(Math.min(answeredCount + 1, questions.length));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      setTimeout(() => setCurrentStep((s) => s + 1), 280);
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

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <button
          id="btn-back"
          className="btn btn--ghost"
          onClick={handleBack}
          aria-label="Go back"
          style={{ padding: "8px 12px", minHeight: "auto" }}
        >
          ← Back
        </button>

        <span className="navbar__brand" style={{ fontSize: "18px" }}>
          <span className="text-red">LOC</span> IT
        </span>

        <button
          id="btn-reset"
          className="btn btn--ghost"
          onClick={handleReset}
          aria-label="Start over"
          style={{ padding: "8px 12px", minHeight: "auto", fontSize: "12px" }}
        >
          Reset
        </button>
      </nav>

      {/* Progress */}
      <div className="guide-header">
        <ProgressIndicator currentStep={currentStep} />
      </div>

      {/* Question */}
      <main
        id="main-content"
        className="guide-body"
        key={currentStep} /* re-mount for animation on step change */
      >
        <QuestionCard
          question={question}
          selectedValue={selectedValue}
          onSelect={handleSelect}
        />
      </main>

      {/* Footer — Submit or Next prompt */}
      <div className="guide-footer">
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
              Next →
            </button>
          )
        )}

        <p className="label text-dimmed" style={{ textAlign: "center" }}>
          Prototype taxonomy — not an official LOCTITE classification
        </p>
      </div>
    </div>
  );
}

export default Guide;
