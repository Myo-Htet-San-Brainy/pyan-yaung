const FormSelect = ({ label, name, list, defaultValue, size, isRequired }) => {
  return (
    <div className="form-control">
      <label className="label capitalize">
        <span className="label-text">{label}</span>
      </label>
      <select
        name={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className={`select select-bordered ${size}`}
        required={isRequired}
      >
        {list?.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
