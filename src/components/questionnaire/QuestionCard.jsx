/**
 * QuestionCard — renders one question and its options
 */

import { OptionButton } from "./OptionButton.jsx";

const STEP_EYEBROWS = [
  "STEP 1 OF 3 • PROJECT CONTEXT",
  "STEP 2 OF 3 • SURFACE COMPATIBILITY",
  "STEP 3 OF 3 • FIT & REPAIR PROFILE",
];

export function QuestionCard({ question, selectedValue, onSelect }) {
  const eyebrowText = STEP_EYEBROWS[question.step - 1] || `STEP ${question.step} OF 3`;

  return (
    <div key={question.id} className="animate-fade-up">
      {/* Question Header */}
      <div className="question-header">
        <div className="question-eyebrow">
          <span>●</span>
          <span>{eyebrowText}</span>
        </div>
        <h2 className="question-title">
          {question.question}
        </h2>
        {question.hint && (
          <p className="question-hint">{question.hint}</p>
        )}
      </div>

      {/* Options Grid */}
      <div className="options-grid" role="group" aria-label={question.question}>
        {question.options.map((option, i) => (
          <div
            key={option.value}
            className={`animate-fade-up animate-fade-up--delay-${Math.min(i + 1, 5)}`}
          >
            <OptionButton
              option={option}
              isSelected={selectedValue === option.value}
              onSelect={onSelect}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;

