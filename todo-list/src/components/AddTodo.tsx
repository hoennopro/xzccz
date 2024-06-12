import React, { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/todos", { title, completed: false })
      .then((response) => {
        setTitle("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Thêm công việc</button>
    </form>
  );
};

export default AddTodo;
