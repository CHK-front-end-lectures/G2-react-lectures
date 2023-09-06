import {useState} from 'react'
import { sculptureList } from './data'

const Slider = () => {
  const [index, setIndex] = useState(0); // 1
  const [showMore, setShowMore] = useState(false); // true

  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  const handleNext = () => {
    if(hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if(hasPrev) {
      setIndex(index - 1);
    }
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrev} disabled={!hasPrev}>Prev</button>
      <button onClick={handleNext} disabled={!hasNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleShowMore}>Show {showMore ? 'less' : 'more'}</button>
      {showMore && <p>{sculpture.description}</p>}

    </>
  )
}

export default Slider