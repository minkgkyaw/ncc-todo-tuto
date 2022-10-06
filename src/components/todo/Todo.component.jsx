import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TodoItem = ({ title, id, deleteTodo, updateTodo, bgColor }) => {
  const onEditHandler = (id) => {
    const newTitle = window.prompt("Do you want to edi todo?", title);
    if (newTitle === "") return;
    const updatedTodo = {
      id,
      title: newTitle,
    };
    return updateTodo(updatedTodo);
  };

  return (
    <div className={`todo-item ${bgColor}`}>
      <p className="todo-text">{title}</p>
      <div className="todo-action">
        <button
          className="text-2xl text-yellow-500 mt-2"
          onClick={() => onEditHandler(id)}
        >
          <FiEdit />
        </button>
        <button
          className="text-2xl text-rose-500 mt-2"
          onClick={() => deleteTodo(id)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
