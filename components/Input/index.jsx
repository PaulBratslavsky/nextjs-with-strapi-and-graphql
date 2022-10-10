export default function Input({ placeholder, label, type, name, alt, error, ...rest }) {
  return (
    <div className="form-control w-full mb-6">
      {label && (
        <label className="label">
          <span className="block text-secondary text-sm font-bold">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="input bg-base-200 text-primary focus:outline-none focus:border-secondary w-full"
        name={name}
        alt={alt}
        {...rest}
      />
      {alt && (
        <label className="label">
          <span className="label-text-alt">{alt}</span>
        </label>
      )}

      {error && (
        <label className="label">
          <span className="label-text-alt">{error}</span>
        </label>
      )}
    </div>
  );
}
