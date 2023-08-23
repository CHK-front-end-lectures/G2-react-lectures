import React from 'react'
import { people } from './data';

// const people = [
//   'Test 1',
//   'Test 2',
//   'Test 3',
//   'Test 4',
//   'Test 5',
//   'Test 6',
// ]

const List = () => {
  const chemists = people.filter(person => person.profession === 'chemist');
  const everyoneElse = people.filter(person => person.profession !== 'chemist');

  return (
    <>
      <h2>Chemists</h2>
      <ul>{chemists.map((item) => (
        <li key={item.id}>
          <img src={item.imageId} alt={item.name} />
          <p><b>{item.name}: </b>{' ' + item.profession + ' '} known for {item.accomplishment}</p>
        </li>
      ))}</ul>

      <h2>Everyone else</h2>
        <ul>{everyoneElse.map((item) => (
          <li key={item.id}>
            <img src={item.imageId} alt={item.name} />
            <p><b>{item.name}: </b>{' ' + item.profession + ' '} known for {item.accomplishment}</p>
            <ul>
              {item.accomplishments && item.accomplishments.map((nextItem, index) => (
                <li key={index}>{nextItem}</li>
              ))}
            </ul>
          </li>
        ))}</ul>
    </>
  )
}

export default List