import type { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const itemClassName = todo.completed ? "todo-item completed" : "todo-item";

  return (
    <li className={itemClassName}>
      <span className="todo-text">{todo.text}</span>
      <div className="actions">
        <button className="toggle-btn" onClick={() => onToggle(todo.id)}>
          {todo.completed ? "Скасувати" : "Виконати"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          Видалити
        </button>
      </div>
    </li>
  );
}
