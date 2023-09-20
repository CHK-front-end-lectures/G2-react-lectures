import React from 'react';

const Punetori = ({ punetori, fshijePunetorin }) => {
  return (
    <>
      <div>
        <p>{punetori.emri}</p>
        <p>{punetori.shteti}</p>
        <p>{punetori.nota}</p>
      </div>
      <button onClick={() => fshijePunetorin(punetori.id)}>Fshije {punetori.id}</button>
      <hr />
    </>
  );
};

export default Punetori;
