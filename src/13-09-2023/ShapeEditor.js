import React, { useState } from 'react'

let initialShapes = [
  {id: 0, type: 'circle', x: 50, y: 100},
  {id: 1, type: 'square', x: 150, y: 100},
  {id: 2, type: 'circle', x: 250, y: 100},
  {id: 3, type: 'triangle', x: 350, y: 100},
]

const ShapeEditor = () => {
  const [shapes, setShapes] = useState(initialShapes);

  const handleShapesDown = (square) => { // handleCircleDown
    const nextShapes = shapes.map((shape) => {
      if (shape.type === square) {
        return {
          ...shape,
          y: shape.y + 100
        }
      } else {
        return shape;
      }
    })
    setShapes(nextShapes);
    console.log('nextShapes', nextShapes);
  }
  return (
    <div>
      <button onClick={() => handleShapesDown('circle')}>
        Move circles down!
      </button>
      <button onClick={() => handleShapesDown('square')}>
        Move squares down!
      </button>
      <button onClick={() => handleShapesDown('triangle')}>
        Move triangle down!
      </button>
      {shapes.map((shape) => {
        return (
          <div key={shape.id} style={{
            background: shape.type === 'triangle' ? 'orange' : 'purple', 
            position: 'absolute', 
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20
            }} />
        )
      })}
    </div>
  )
}

export default ShapeEditor