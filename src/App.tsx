import { useState } from "react"
import { Todo } from "./modelTypes"
import NewTodo from "./components/NewTodo"
import ListTodo from "./components/ListTodo"

import "./App.css"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random(), text: text }])
  }

  const deleteTodoHandler = (todoId: number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="container">
      <NewTodo addTodo={addTodoHandler} />
      <ListTodo items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
