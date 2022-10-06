import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TodoForm, TodoList } from "../../components";

const initialState = [];
const TodoPage = () => {
  const [todos, setTodos] = useState(initialState);

  const [value, setValue] = useState("");
  const inputRef = useRef();

  const colorArray = [
    "purple-color",
    "rose-color",
    "emerald-color",
    "slate-color",
    "teal-color",
    "sky-color",
    "violet-color",
    "fuchsia-color",
    "pink-color",
    "blue-color",
    "orange-color",
  ];

  // todo: on submit handler func / add new todo handler func
  const addNewTodo = (e) => {
    e.preventDefault();
    if (value.trim() === "" || !value) {
      window.alert("We don't allow empty!");
      setValue("");
      return inputRef.current.focus();
    }
    setTodos((prev) => [
      ...prev,
      {
        id: uuid(),
        title: value,
        bgColor: colorArray[Math.floor(Math.random() * colorArray.length)],
      },
    ]);
    return setValue("");
  };

  // todo: delete todo handler func
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // todo: update todo handler func
  const updateTodo = (updatedTodo) =>
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id
          ? { ...todo, title: updatedTodo.title }
          : todo
      )
    );
  return (
    <div className="todo-page">
      <TodoForm
        addNewTodo={addNewTodo}
        value={value}
        inputRef={inputRef}
        handleChange={(e) => setValue(e.target.value)}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoPage;
