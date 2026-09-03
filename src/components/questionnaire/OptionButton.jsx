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
    >
      {option.icon && (
        <span className="option-btn__icon" aria-hidden="true">
          {option.icon}
        </span>
      )}
      <span className="option-btn__label">{option.label}</span>
      <span className="option-btn__check" aria-hidden="true">
        {isSelected ? "✓" : ""}
      </span>
    </button>
  );
}

export default OptionButton;
