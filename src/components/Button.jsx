function Button({ text, onClick, disabled }) {
  return (
    <div>
      <button
        className="py-2 px-4 bg-MarineBlue text-white rounded-lg "
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
