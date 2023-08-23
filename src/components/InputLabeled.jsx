function InputField(params) {
  const {
    id = "",
    name = "",
    label = "",
    content = "",
    type = "",
    pattern = "",
    placeholder = "",
    value = "",
    options = [],
    onchange = () => {},
    required = false,
  } = params;

  if (type === "textarea") {
    return (
      <textarea
        id={id}
        name={name}
        required={required}
        onChange={onchange}
        className="rounded-md border-2 border-solid border-cust-gray bg-cust-white p-2"
      >
        {value}
      </textarea>
    );
  } else if (type === "checkbox") {
    return (
      <figure className="flex flex-row gap-2">
        <input
          id={id}
          value={id}
          type="checkbox"
          required={required}
          className="cursor-pointer"
        />
        <label htmlFor={id} className="cursor-pointer">
          {content}
        </label>
      </figure>
    );
  } else if (type === "select") {
    return (
      <select
        id={id}
        name={name}
        required={required}
        onChange={onchange}
        className="cursor-pointer rounded-md border-2 border-solid border-cust-gray bg-cust-white p-2"
      >
        <option key="placeholder" value="" className="hidden">
          {`Pilih ${label}`}
        </option>
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.value}>
              {opt.content}
            </option>
          );
        })}
      </select>
    );
  } else if (type === "file") {
    return (
      <figure>
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          onChange={onchange}
          className="h-1 w-1"
        />
        <label
          htmlFor={id}
          className="cursor-pointer rounded-md  bg-cust-green p-2 text-cust-white"
        >
          Pilih File
        </label>
      </figure>
    );
  } else {
    return (
      <input
        id={id}
        name={name}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        defaultValue={value}
        className="rounded-md border-2 border-solid border-cust-gray bg-cust-white p-2"
      />
    );
  }
}

export default function InputLabeled(params) {
  const { id, label } = params;

  return (
    <figure className="flex flex-col gap-1 text-cust-black">
      {label === "" ? <></> : <label htmlFor={id}>{label}</label>}
      {<InputField {...params} />}
    </figure>
  );
}
