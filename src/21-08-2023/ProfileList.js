import React from 'react'
import '../16-08-2023/Profile.css';
import Card from './Card';
import Profile from '../16-08-2023/Profile';
import Button from './Paragraph';

const ProfileList = () => {
  return (
    <div className="profile-list">
      <Card>
        <Profile 
          fullName="Egzon Murati" 
          src="https://i.imgur.com/MK3eW3As.jpg" 
        />
        <div>Profession: Developer</div>
      </Card>
      <Card>

      <Profile 
        fullName="Muhamet" 
        description="Developer-1" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
      </Card>
      <Card>

      <Profile 
        fullName="Urim" 
        src="https://i.imgur.com/MK3eW3As.jpg" 
      />
      </Card>
      <Card>
        <Profile description="Developer-222" />
        <div></div>
        <Profile description="Developer-3" src="https://i.imgur.com/MK3eW3As.jpg">
          <div>Profession: Engineer</div>
          <div>Age: 32</div>
        </Profile>
      </Card>
      <Button>First Button</Button>
      <Button>
          Second Button
          <p>Click icon</p>
        </Button>
    </div>
  )
}

export default ProfileList;