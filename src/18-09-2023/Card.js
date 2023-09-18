import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address}</p>
    </div>

  )
}

export default Card