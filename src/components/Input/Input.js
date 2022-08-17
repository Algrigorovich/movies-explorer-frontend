import "./Input.css";

const Input = ({ label, id, name, type, defaultValue, hasError }) => {
  const errors = {
    text: "Что-то пошло не так...",
  };

  return (
    <label className="form__label">
      {label}
      <input
        autoComplete="on"
        className={`input ${hasError ? "input__type_error" : ""}`}
        id={id}
        name={name}
        type={type}
        minLength="2"
        maxLength="40"
        required
        defaultValue={defaultValue}
      />
      <p className={`input__error ${hasError ? "input__error_visible" : ""}`}>{errors.text}</p>
    </label>
  );
};

export default Input;
