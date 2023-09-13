import { useState } from 'react'
// CRUD - create, read, update, delete - POST, GET, PUT, DELETE

const initialUsers = [
  {
    id: 0, name: 'Egzon',
  },
  {
    id: 1, name: 'Muhamet',
  },
  {
    id: 2, name: 'Shkelzim',
  },
]

let nextId = 3;

const List = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(initialUsers);

  const handleDelete = (id) => { //3 
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>List of users</h1>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      <button onClick={() => setList([...list, {
        id: nextId++,
        name: name
      }])}>Add</button>
      <ul>
        {list.map((item, index) => {
          return (
            <div className='flex' key={index}>
              <li>{item.id}: {item.name}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default List