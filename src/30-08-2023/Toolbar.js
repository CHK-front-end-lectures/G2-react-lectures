import React from 'react'

// Event: stop propagation, prevent default

const Button = ({handleClick, children}) => {
  const handleClickEvent = (evt) => {
    evt.stopPropagation();
    handleClick();
  }

  return (
    <button onClick={handleClickEvent}>
      {children}
    </button>
  )
}

const PlayButton = ({movieName}) => {
  const handlePlayClick = () => {
    alert(`Playing ${movieName}`)
  }

  return (
    <Button handleClick={handlePlayClick}>
      Play {movieName}
    </Button>
  )
}

const UploadButton = () => {
  return (
    <Button handleClick={() => alert('Uploading')}>
      Upload Image
    </Button>
  )
}

const Toolbar = () => {
  return (
    <div style={{backgroundColor: 'red', padding: '20px'}} onClick={() => alert('Clicked on the toolbar')}>
      <PlayButton movieName='Test movie' />
      <UploadButton />
    </div>
  )
}



export default Toolbar