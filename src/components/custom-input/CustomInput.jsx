
function CustomInput(props ) {
    const { type, name, placeholder, onchange, value } = props;
    return (
      <div className="flex flex-col gap-4 w-full">
            <label className="text-2xl">{name}</label>
          <input className="p-2 rounded-xl  border-2" type={type} name={name} placeholder={placeholder} onChange={onchange} value={value}  />

    </div>
  )
}

export default CustomInput