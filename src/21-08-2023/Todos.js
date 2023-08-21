import React from 'react'

// ternary operator
const Item = ({name, isDone, importance}) => {
  // if (isDone) {
  //   return <li>{name} </li>
  // }
  return (
    // <li>{name} {isDone ? '✓' : ''}</li>
    <li style={{color: (importance >= 7) ? 'red' : 'green'}}>
      {isDone ? <del>{name} {(isDone || importance > 3) && '✓'}</del> : name}
    </li>
  )
}

const Todos = () => {
  return (
    <div>
      Todos
      <Item name="Buy milk" isDone={true} importance={2} />
      <Item name="Go to gym" isDone={false} importance={7} />
      <Item name="Learn react" isDone={true} importance={9} />
    </div>
  )
}

export default Todos

/* Detyre: 
1.Per cdo item qe importance e ka me te madhe se 3, shfaqni "Importance: ${vlera}"
2. Pervec simbolit checkmark per punet e perfunduara, shfaqni simbolin X per punet e paperfunduara
*/
