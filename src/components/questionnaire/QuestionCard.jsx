/**
 * QuestionCard — renders one question and its options
 */

import { OptionButton } from "./OptionButton.jsx";

export function QuestionCard({ question, selectedValue, onSelect }) {
  return (
    <div key={question.id} className="animate-fade-up">
      {/* Question text */}
      <div style={{ marginBottom: "20px" }}>
        <h2 className="heading-lg" style={{ marginBottom: "6px" }}>
          {question.question}
        </h2>
        {question.hint && (
          <p className="body-sm text-muted">{question.hint}</p>
        )}
      </div>

      {/* Options */}
      <div className="options-list" role="group" aria-label={question.question}>
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
