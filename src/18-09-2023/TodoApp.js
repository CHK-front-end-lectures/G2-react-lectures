import React, { useState } from 'react'
import AddToDo from './AddToDo';
import TaskList from './TaskList';

const initialTodos = [
  {
    id: 0,
    title: 'Buy something',
    done: true,
  },
  {
    id: 1,
    title: 'Buy milk',
    done: false,
  },
  {
    id: 2,
    title: 'Buy cheese',
    done: true,
  },
]
let nextId = 3;

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (title) => { // Buy milk
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ])

  }

  const handleChangeTodo = (nextTodo) => { // {name: Buy baklava, id: 2, done: true}
    setTodos(todos.map(todo => {
      if(todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }))
    
  }

  const handleDeleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter(todo => todo.id !== id))
    
  }
  return (
    <>
      <AddToDo onAddTodo={handleAddTodo} />
      <TaskList todos={todos} onChange={handleChangeTodo} onDelete={handleDeleteTodo} />
    </>
  )
}

export default TodoApp