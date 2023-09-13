import {useState} from 'react'

const MovingDots = () => {
  const [position, setPosition] = useState({
    x: 0, //20
    y: 0, // 20
  })
  return (
    <div style={{position: 'relative', width: '100vw', height: '100vh'}} onPointerMove={(evt) => setPosition({
      x: evt.clientX,
      y: evt.clientY,
    })}>
      <div style={{
        position: 'absolute', 
        backgroundColor: 'red', 
        borderRadius: '50%', 
        transform: `translate(${position.x}px, ${position.y}px`, 
        left: -10, 
        top: -10, 
        width: 20, 
        height: 20
      }}>
      </div>

    </div>
  )
}

export default MovingDots