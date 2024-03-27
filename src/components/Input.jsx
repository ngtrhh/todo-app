const Input = ({
  label = "Label",
  placeholder = "Placeholder",
  size = "md",
  error = false,
  disabled = false,
  fullWidth = false,
  multiline = false,
  row = 1,
  helperText,
  value,
  startIcon,
  endIcon,
  onChange,
}) => {
  return (
    <div
      className={`input-component${error ? " error" : ""}${
        disabled ? " disabled" : ""
      }${fullWidth ? " fullWidth" : ""}`}
    >
      {!multiline ? (
        <div className={`content ${size}`}>
          {startIcon}
          <input
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
          {endIcon}
        </div>
      ) : (
        <div className="content">
          <textarea rows={row} placeholder={placeholder} />
        </div>
      )}

      {helperText && <div className="helper-text">{helperText}</div>}
    </div>
  );
};

export default Input;
