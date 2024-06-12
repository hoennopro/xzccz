import React, { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleToggleCompleted = () => {
    setCompleted(!completed);

    axios
      .put(`http://localhost:3000/todos/${todo.id}`, { completed: !completed })
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleCompleted}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
    </li>
  );
};

export default TodoItem;
