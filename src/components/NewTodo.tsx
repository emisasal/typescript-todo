import React, { useRef } from "react"
import "./newTodo.css"

type NewTodoProps = { addTodo: (todoText: string) => void }

const NewTodo = ({ addTodo }: NewTodoProps) => {
  const textRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTodo(textRef.current!.value)
    textRef.current!.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>TypeScript ToDo</h1>
      <div className="add">
        <input type="text" ref={textRef}></input>
        <button type="submit">Add ToDo</button>
      </div>
    </form>
  )
}

export default NewTodo
