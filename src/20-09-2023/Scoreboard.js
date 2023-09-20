import { useState } from 'react';

const Scoreboard = () => {
  const [player, setPlayer] = useState({ // hook - react hooks
    firstName: 'John',
    lastName: 'Doe',
    score: 10,
  });

  const handlePlusClick = (evt) => {
    player.score++; // nuk e bon komponentet (Scoreboard) me u re-renderu
  };

  const handleFirstName = (evt) => {
    setPlayer({
      ...player,
      firstName: evt.target.value,
    });
  };

  const handleLastname = (evt) => {
    setPlayer({
      ...player,
      lastName: evt.target.value,
    });
  };
  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstName} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastname} />
      </label>
    </>
  );
};

export default Scoreboard;
