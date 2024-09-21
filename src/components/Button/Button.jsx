import css from './Button.module.css';

const Button = (text, color) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css.btn}
        type="button"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
