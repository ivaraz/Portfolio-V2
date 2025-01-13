import { Label } from "./InputForm";
const SuggestionBox = (props) => {
  const { name, placeholder, label } = props;
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        cols="40"
        rows="5"
        className="border-2 border-black"
      ></textarea>
    </div>
  );
};
export default SuggestionBox;
