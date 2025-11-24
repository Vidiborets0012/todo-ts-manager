import { useState } from "react";
import type { Todo } from "../../types/todo";

const initialTodos: Todo[] = [
  { id: 1, text: "Вивчити TypeScript", completed: true },
  { id: 2, text: "Реалізувати Todo List", completed: false },
  { id: 3, text: "Задеплоїти проект", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  console.log("todos:", todos);

  return (
    <>
      <h1>Менеджер Завдань (Todo List)</h1>
    </>
  );
}
