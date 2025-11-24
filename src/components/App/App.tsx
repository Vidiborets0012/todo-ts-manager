import { useState } from "react";
import type { Todo } from "../../types/todo";
import TodoForm from "../TodoForm.tsx/TodoForm";

const initialTodos: Todo[] = [
  { id: 1, text: "Вивчити TypeScript", completed: true },
  { id: 2, text: "Реалізувати Todo List", completed: false },
  { id: 3, text: "Задеплоїти проект", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  console.log("todos:", todos);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <>
      <h1>Менеджер Завдань (Todo List)</h1>
      <TodoForm onAdd={handleAddTodo} />

      {/* Тимчасове відображення для перевірки стану */}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
}
