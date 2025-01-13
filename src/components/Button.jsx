function Button({ text, onClick, disabled }) {
  return (
    <div className="mt-6">
      <button
        className="py-2 px-4  bg-PurplishBlue text-white rounded-lg "
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
