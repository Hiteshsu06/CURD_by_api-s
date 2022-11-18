

export const Input = ({ text, type, value,id, onChange,className}) => {

  return (
    <div className="mb-3">
      <input
        type={type}
        name={text.name}
        placeholder={text.placeholder}
        className={className ? className : "form-control"}
        required
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  )
}
