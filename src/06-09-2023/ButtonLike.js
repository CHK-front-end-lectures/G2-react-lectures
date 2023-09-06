import { useState } from 'react'

const ButtonLike = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (evt) => {
    setLiked(evt.target.checked);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={liked} onChange={toggleLike} />
        Like
      </label>
      <p>You {liked ? 'liked' : 'did not liked'} this</p>
    </div>
  )
}

export default ButtonLike