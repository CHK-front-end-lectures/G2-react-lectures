import React, { useState } from 'react'
import Paragraph from './Paragraph';
// react hooks - useState
// let ose const
const UpdatedProps = () => {
  let [name, setName] = useState('Egzon');
  let [color, setColor] = useState('green');
  
  return (
    <div>
      <select onChange={(evt) => setName(evt.target.value)}>
        <option value='Egzon'>Egzon</option>
        <option value='Muhamet'>Muhamet</option>
        <option value='Shkelzim'>Shkelzim</option>
      </select>
      <select onChange={(evt) => setColor(evt.target.value)}>
        <option value='green'>green</option>
        <option value='black'>black</option>
        <option value='red'>red</option>
        <option value='pink'>pink</option>
      </select>
      <Paragraph name={name} color={color} />
    </div>
  )
}

export default UpdatedProps