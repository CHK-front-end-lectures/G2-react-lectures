import React from 'react'

const Form = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitted');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form