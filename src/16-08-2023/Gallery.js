import './Gallery.css';
// ES6 - arrow function
const Gallery = () => {
  return (
    <div className="gallery">
      Gallery
      <Profile />
    </div>
  )
}

export const Profile = () => {
  return (
    <div>
      Profile
    </div>
  )
}

export default Gallery;

