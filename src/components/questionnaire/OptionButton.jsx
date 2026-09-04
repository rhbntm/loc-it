/**
 * OptionButton — single selectable answer in the questionnaire
 */

export function OptionButton({ option, isSelected, onSelect }) {
  return (
    <button
      id={`option-${option.value}`}
      className={`option-btn ${isSelected ? "option-btn--selected" : ""}`}
      onClick={() => onSelect(option.value)}
      aria-pressed={isSelected}
      type="button"
    >
      {option.icon && (
        <div className="option-btn__icon-wrap" aria-hidden="true">
          {option.icon}
        </div>
      )}
      <div className="option-btn__content">
        <span className="option-btn__label">{option.label}</span>
      </div>
      <div className="option-btn__check-pill" aria-hidden="true">
        {isSelected ? "✓" : ""}
      </div>
    </button>
  );
}

export default OptionButton;

