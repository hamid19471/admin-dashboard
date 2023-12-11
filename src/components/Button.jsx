const Button = ({ name, disabled, onClick, className, type }) => {
  return (
    <button
      className={`btn btn-primary text-white btn-wide ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {disabled && <span className="loading loading-spinner"></span>}
      {name}
    </button>
  );
};
export default Button;
