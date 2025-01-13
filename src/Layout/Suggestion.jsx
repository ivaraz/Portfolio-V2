import Button from "../components/Button";
import InputForm from "../components/InputForm";
import SuggestionBox from "../components/SuggestionBox";

export default function Suggestion() {
  return (
    <div
      id="suggestion"
      className="flex flex-col gap-10 justify-center items-center h-screen"
    >
      <h1>Suggestion</h1>
      <InputForm
        type="text"
        label="Nama"
        name="Nama"
        placeholder="Masukan Nama"
      />
      <InputForm
        type="email"
        label="Email"
        name="Email"
        placeholder="Masukan Email"
      />

      <SuggestionBox
        label="Saran & Kritik"
        name="Suggestion"
        placeholder="Masukan Saran"
      />

      <Button name="Submit" />
    </div>
  );
}
