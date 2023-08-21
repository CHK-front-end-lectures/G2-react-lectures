import React from 'react'
import Profile from './Profile'
import './Profile.css';

const ProfileList = () => {
  return (
    <div className="profile-list">
      <Profile 
        fullName="Egzon Murati" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
      <Profile 
        fullName="Muhamet" 
        description="Developer-1" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
      <Profile 
        fullName="Urim" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
      <Profile 
        description="Developer-3" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
    </div>
  )
}

export default ProfileList