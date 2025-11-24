import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputText.trim()) {
      onAdd(inputText.trim());
      setInputText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Нове завдання..."
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <button type="submit">Додати</button>
    </form>
  );
}
