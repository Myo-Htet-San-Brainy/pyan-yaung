const FormCheckbox = ({
  label,
  name,
  defaultValue,
  size,
  isRequired = false,
}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
        required={isRequired}
      />
    </div>
  );
};
export default FormCheckbox;
