import React from 'react'

const person = {
  name: "Egzon",
  surname: "Murati",
  src: "https://i.imgur.com/MK3eW3As.jpg",
  alt: "Katherine Johnson",
  style: {
    backgroundColor: 'black',
    color: 'pink',
  }
};
// camelCase
// background-color -> backgroundColor
// curly braces
// double curlies

// React Fragment
const Todos = () => {
  // const personAlt = "Katherine Johnson"
  // const personSrc = "https://i.imgur.com/MK3eW3As.jpg"
  // const name = "Katherine Johnson"
  return (
    <>
      <h1>{person.name}'s Todos</h1>
      <img src={person.src} alt={person.alt} className="photo"/>
      <ul style={person.style}>
        <li>Buy something</li>
        <li>Do something</li>
      </ul>
    </>
  )
}

export default Todos