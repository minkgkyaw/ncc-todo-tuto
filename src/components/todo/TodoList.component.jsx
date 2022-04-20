import React from "react";
import TodoItem from "./Todo.component";
import {Skeleton} from '../'

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  console.log(todos)
  return (
    <div className="todo-list">
      {
        todos.length !== 0 ? todos.map(({id, title, bgColor}) => <TodoItem key={id} id={id} title={title} deleteTodo={deleteTodo} updateTodo={updateTodo} bgColor={bgColor} />) : <Skeleton />
      }
    </div>
  );
};

export default TodoList;
