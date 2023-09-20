import React from 'react';
import { useState } from 'react';
import Punetori from './Punetori';
import ShtoPunetor from './ShtoPunetor';

const punetoretFillestar = [
  {
    id: 1,
    emri: 'Egzon',
    shteti: 'Kosove',
    nota: 8,
  },
  {
    id: 2,
    emri: 'Muhamet',
    shteti: 'Kosove',
    nota: 9,
  },
];

const Punetoret = () => {
  const [punetoret, setPunetoret] = useState(punetoretFillestar);

  const shtoPunetor = (punetori) => {
    setPunetoret([...punetoret, punetori]);
  };

  const ndryshoShtetin = () => {
    let punetoret2 = punetoret.map((punetori) => {
      if (punetori.id === 2) {
        return {
          ...punetori,
          shteti: 'DE',
        };
      } else {
        return punetori;
      }
    });
    setPunetoret(punetoret2);
  };

  const fshijeTeParin = (id) => {
    setPunetoret(punetoret.filter((punetori) => punetori.id !== id));
  };

  return (
    <div>
      <ShtoPunetor shtoPunetor={shtoPunetor} />
      <div>
        <button onClick={ndryshoShtetin}>Ndryshoje shtetin e punetorit te dyte ne Gjermani</button>
      </div>
      Punetoret
      {punetoret.map((punetori) => {
        return <Punetori key={punetori.id} punetori={punetori} fshijePunetorin={fshijeTeParin} />;
      })}
    </div>
  );
};

export default Punetoret;
