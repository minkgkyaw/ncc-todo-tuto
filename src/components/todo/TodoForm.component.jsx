import React, { useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";

const TodoForm = ({ value, inputRef, handleChange, addNewTodo }) => {
  return (
    <div className="todo-form bg-gray-50">
      <form onSubmit={addNewTodo}>
        <div className="float-right flex flex-row align-center">
          <div className="input relative w-96 mr-5 ">
            <input
              type="text"
              className="form-input peer"
              placeholder="Add your new todo in here..."
              id="newTodo"
              value={value}
              onChange={handleChange}
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
