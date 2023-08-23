import React from 'react'

const Button = () => {
  const handleClick = () => {
    alert('Click inside arrow function');
  }
  return (
    // <button onClick={function doSomething() {
    //   alert('Clicked!');
    // }}>Click me!</button>

    // <button onClick={() => {
    //   alert('Click inside arrow function');
    // }}>Click me!</button>

    <button onClick={handleClick}>Click me!</button>
  )
}

const Toolbar = () => {
  return (
    <div>
      Toolbar
      <Button />
    </div>
  )
}



export default Toolbar