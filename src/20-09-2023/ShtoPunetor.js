import React, { useState } from 'react';

const ShtoPunetor = ({ shtoPunetor }) => {
  const [punetor, setPunetor] = useState({
    id: Math.random(),
    emri: '',
    shteti: '',
    nota: '',
  });

  const shtoPunetorin = (evt) => {
    evt.preventDefault();
    console.log('punetori', punetor);
    shtoPunetor(punetor);
  };

  return (
    <form style={{ marginBottom: '40px', padding: '20px' }} onSubmit={shtoPunetorin}>
      <div>
        Emri:
        <input
          type='text'
          value={punetor.emri}
          onChange={(evt) => setPunetor({ ...punetor, emri: evt.target.value })}
        />
      </div>
      <div>
        Shteti:
        <input
          type='text'
          value={punetor.shteti}
          onChange={(evt) => setPunetor({ ...punetor, shteti: evt.target.value })}
        />
      </div>
      <div>
        Emri:
        <input
          type='number'
          value={punetor.nota}
          onChange={(evt) => setPunetor({ ...punetor, nota: evt.target.value })}
        />
      </div>
      <button type='submit'>Shto</button>
    </form>
  );
};

export default ShtoPunetor;
