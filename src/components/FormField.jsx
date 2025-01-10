function FormField({ label, type, name, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
      />
      {error && (
        <span className="font-ubuntu text-sm text-StrawberryRed">{error}</span>
      )}
    </div>
  );
}
export default FormField;
