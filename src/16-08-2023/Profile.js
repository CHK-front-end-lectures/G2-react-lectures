import React from 'react'

// destructuring objects
// const props = {
//   name: 'Egzon',
//   surname: 'Murati',
//   age: 32,
//   profession: 'Developer'
// }

const Profile = ({src, fullName = "Test", description = 'Senior Developer'}) => {
  return (
    <div className="profile">
      <img src={src} alt="Person" />
      <h3>{fullName}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Profile