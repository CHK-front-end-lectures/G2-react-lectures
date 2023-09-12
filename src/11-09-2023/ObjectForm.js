import { useState } from 'react'

const ObjectForm = () => {
  const [person, setPerson] = useState({
    name: 'Egzon',
    surname: 'Murati',
    email: 'egzon.murati@gmail.com',
    studies: {
      field: 'Computer engineering',
      degree: 'Bachelor'
    }
  })
  return (
    <div>
      <label>
        First name:
        <input value={person.name} onChange={(evt) => setPerson({
          ...person,
          name: evt.target.value,
        })} />
      </label>
      <label>
        Last name:
        <input value={person.surname} onChange={(evt) => setPerson({
          ...person,
          surname: evt.target.value
        })} />
      </label>
      <label>
        Email
        <input value={person.email} onChange={(evt) => setPerson({
         ...person,
         email: evt.target.value,
        })} />
      </label>

      <label>
        Field
        <input value={person.studies.field} onChange={(evt) => setPerson({
          ...person,
          studies: {
            ...person.studies,
            field: evt.target.value
          }
        })} />
      </label>
      <label>
        Degree
        <input value={person.studies.degree} onChange={(evt) => setPerson({
          studies: {
            ...person.studies,
            degree: evt.target.value
          }
        })} />
      </label>
      <p>{person.name} {person.surname}: {person.email}</p>
      <div>Studies:</div>
      <p>{person.studies.field}: {person.studies.degree}</p>
    </div>
  )
}

export default ObjectForm