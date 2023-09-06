import { useState } from 'react';

const test = {
  text: 'Hello from React',
  count: 0
}

const TextInput = () => {
  const [text, setText] = useState(test.text); // 0, 'Hello', {},
  const [count, setCount] = useState(test.count);

  const handleChange = (evt) => {
    setText(evt.target.value);
  }

  const increaseCounter = () => {
    setCount(count + 3);
  }

  const resetText = () => {
    setText(test.text);
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>{text} + {count}</p>
      <button onClick={increaseCounter}>+3</button>
      <button onClick={resetText}>Reset</button>
    </div>
  )
}

export default TextInput