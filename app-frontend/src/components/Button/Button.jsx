import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({
  btnClass,
  type,
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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
