import React, {useState} from 'react'
import { TodoForm, TodoList } from '../../components'

const initialState = []
const TodoPage = () => {
  const [todos, setTodos] = useState(initialState)

  // todo: delete todo handler func
  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id))


  // todo: update todo handler func
  const updateTodo = updatedTodo => setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...todo, title: updatedTodo.title} : todo))
  return (
    <div className="todo-page">
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoPage