function FormField({ label, type, name, value, onChange, error, disabled }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className={`border py-2 px-4 rounded-lg focus:outline-none focus:ring-2 ${
          error
            ? "border-StrawberryRed focus:ring-StrawberryRed"
            : "border-PurplishBlue focus:ring-PurplishBlue"
        }`}
      />
      {error && (
        <span className="font-ubuntu text-sm text-StrawberryRed">{error}</span>
      )}
    </div>
  );
}
export default FormField;
