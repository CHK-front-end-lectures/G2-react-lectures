import React, { useState } from 'react';
import AddToDo from './AddToDo';
import TaskList from './TaskList';
import CompletedItems from './CompletedItems';

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
];
let nextId = 3;

const TodoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  console.log(todos);

  const handleAddTodo = (title) => {
    // muhamet
    // Buy milk

    // title e ka vleren muhamet

    // Ruhet nje objekt i ri ne array
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (updatedTodo) => {
    // {name: Buy baklava, id: 2, done: true}
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      }),
    );
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddToDo onAddTodo={handleAddTodo} />
      <TaskList todos={todos} onChange={handleChangeTodo} onDelete={handleDeleteTodo} />
      <CompletedItems todos={todos} />
    </>
  );
};

export default TodoApp;
