import React from 'react'

const person = {
  imageDomain: 'https://i.imgur.com/',
  imageId: 'MK3eW3As',
  imageExt: '.jpg'
}

const Avatar = ({size }) => {
  const {imageDomain, imageId, imageExt} = person;
  return (
    <div className='avatar'>
      <img src={imageDomain + imageId + imageExt} alt='Katherine' style={{width: size, height: size}} />
    </div>
  )
}

export default Avatar