import React, { useRef } from "react"

type NewTodoProps = { addTodo: (todoText: string) => void }

const NewTodo = ({ addTodo }: NewTodoProps) => {
  const textRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newTodo = textRef.current!.value
    addTodo(newTodo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>Enter ToDo</div>
      <input type="text" ref={textRef}></input>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo
