import {useState} from 'react';

const Counter = () => {
  // let count = 0;
  const [count, setCount]= useState(0); // 1 
  const increaseCounter = () => {
    setCount(count + 1)
    // count = count + 1;
    console.log('count', count);
  }

  return (
    <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
  )
}

export default Counter