
import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function Button({
  btnClass,
  type,
  // title,
  children,
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={s[btnClass]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  // title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
