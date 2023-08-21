import React from 'react'

const Paragraph = ({name, color}) => {
  return (
    <p style={{color: color}}>
      {name}
    </p>
  )
}

export default Paragraph