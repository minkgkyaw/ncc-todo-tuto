import React, { useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { v4 as uuid } from "uuid";

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef()

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
    "orange-color"
  ];

  // todo: on submit handler function
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "" || !value) {
      window.alert('We don\'t allow empty!')
      setValue("")
      return inputRef.current.focus()
    };
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

  return (
    <div className="todo-form bg-gray-50">
      <form onSubmit={onSubmitHandler}>
        <div className="float-right flex flex-row align-center">
          <div className="input relative w-96 mr-5 ">
            <input
              type="text"
              className="form-input peer"
              placeholder="Add your new todo in here..."
              id="newTodo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              ref={inputRef}
            />
            <label htmlFor="newTodo" className="form-input-label">
              Add New Todo
            </label>
          </div>
          <button className="submit-btn" type="submit">
            Add
            <IoMdSend className="ml-3" />
          </button>
        </div>
        <div className="clear-both py-3"></div>
      </form>
    </div>
  );
};

export default TodoForm;
