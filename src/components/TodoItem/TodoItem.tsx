import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const itemClassName = todo.completed ? "todo-item completed" : "todo-item";

  return (
    <li className={itemClassName}>
      <span className="todo-text">{todo.text}</span>
    </li>
  );
}
