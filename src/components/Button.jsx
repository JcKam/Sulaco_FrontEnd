import "./button.scss";

const Button = ({
  style,
  type,
  label,
  size,
  disabled,
  state,
  setState,
  modifState,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={style + " " + size + " button"}
      onClick={() => {
        setState({ state }, { modifState });
      }}
    >
      {label}
    </button>
  );
};

export default Button;
