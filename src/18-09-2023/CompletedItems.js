import React from 'react';

const CompletedItems = ({ todos }) => {
  // {done: false}, {done: true}, {done: true}
  const completedTodos = todos.filter((item) => item.done === true);
  return (
    <div>
      <h2>Completed Items</h2>
      {completedTodos.map((todo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default CompletedItems;
