import "./listTodo.css"

type ListTodoProps = { items: { id: number; text: string }[], onDeleteTodo: (id: number) => void }

const ListTodo = ({ items, onDeleteTodo }: ListTodoProps) => {
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button className="listButton" onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ListTodo
