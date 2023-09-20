import React, { useState } from 'react'
import TodoApp from './TodoApp';

const AddToDo = ({onAddTodo}) => {
  const [title, setTitle] = useState('');
  return (
    <>
    <input placeholder='Add todo' value={title} onChange={e => setTitle(e.target.value)} />
    <button onClick={() => {
      setTitle('');
      onAddTodo(title); // egzon
    }}>Add</button>
    </>
  )
}

export default AddToDo