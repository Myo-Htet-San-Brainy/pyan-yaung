const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  isRequired = false,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className={`input input-bordered ${size}`}
        required={isRequired}
      />
    </div>
  );
};

export default FormInput;
