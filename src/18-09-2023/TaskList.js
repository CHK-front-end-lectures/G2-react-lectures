import {useState} from 'react'

const TaskList = ({todos, onChange, onDelete}) => {
  console.log(todos);
  return (
    <ul>
      {todos && todos.map((todo) => {
        return (
          <Task todo={todo} onChange={onChange} onDelete={onDelete} />
        )
      })}
    </ul>
  )
}

export const Task = ({todo, onChange, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  let toDoContent;

  if(isEditing) { // true // false
    toDoContent = (
      <>
        <input value={todo.title} onChange={evt => {
          onChange({
            ...todo,
            title: evt.target.value
          })
        }} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    toDoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label style={{display: 'block'}}>
      <input type='checkbox' checked={todo.done} onChange={e => {
        onChange({
          ...todo,
          done: e.target.checked
        })
      }} />
      {toDoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>

  )
}

export default TaskList