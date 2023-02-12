type ListTodoProps = { items: { id: number; text: string }[], onDeleteTodo: (id: number) => void }

const ListTodo = ({ items, onDeleteTodo }: ListTodoProps) => {
  return (
    <ul>
      {items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default ListTodo
