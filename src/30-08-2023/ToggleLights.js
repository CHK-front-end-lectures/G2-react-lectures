import React from 'react'

const ToggleLights = () => {
  const handleClick = () => {
    let bodyStyle = document.body.style;

    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>ToggleLights</button>
  )
}

export default ToggleLights