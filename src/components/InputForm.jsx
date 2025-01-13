const Label = (props) => {
  const { name, children } = props;
  return <label htmlFor={name}>{children}</label>;
};

const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="border-2 border-black w-[20rem] pl-2 py-1 rounded-sm"
    />
  );
};

const InputForm = (props) => {
  const { name, type, placeholder, label } = props;
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
export { Label };
export default InputForm;
