import React from 'react'

// destructuring objects
// const props = {
//   name: 'Egzon',
//   surname: 'Murati',
//   age: 32,
//   profession: 'Developer'
// }

const Profile = ({src, fullName = "Test", description, children}) => {
  return (
    <div className="profile">
      {children}
      <img src={src} alt="Person" />
      <h3>{fullName}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Profile