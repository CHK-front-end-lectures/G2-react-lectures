import { useState } from 'react'

let nextId = 0;
const List = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>List of users</h1>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      <button onClick={() => setList([...list, {
        id: nextId++,
        name: name
      }])}>Add</button>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>{item.id}: {item.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default List