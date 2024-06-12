import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import Modal from "../components/Modal";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleToggleCompleted = (todo: Todo) => {
    // Cập nhật trạng thái công việc
    axios
      .put(`http://localhost:3000/todos/${todo.id}`, {
        completed: !todo.completed,
      })
      .then((response) => {
        // Cập nhật danh sách công việc
        setTodos(
          todos.map((t) =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleShowModal = () => {
    if (todos.every((todo) => todo.completed)) {
      setShowModal(true);
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={handleToggleCompleted}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Hoàn thành công việc</h2>
          <p>Tất cả công việc đều đã được hoàn thành!</p>
        </Modal>
      )}
    </div>
  );
};

export default TodoList;
