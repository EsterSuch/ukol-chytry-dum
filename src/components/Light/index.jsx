import React, { useState } from 'react';
import '../Light/style.css';

import sviti from '../Light/light-on.svg';
import nesviti from '../Light/light-off.svg';


const Light = ({ name, state }) => {

  const [svetlo, setSvetlo] = useState(state);
  const zapnout = () => {
    setSvetlo(true);
  };
  const vypnout = () => {
    setSvetlo(state='off');
  };

  return (
    <div className="light" onClick={svetlo ? zapnout : vypnout}>
      <div className="light__icon">
        <img
          src={svetlo ? sviti : nesviti}
          alt={svetlo ? "Zapnutá žárovka" : "Vypnutá žárovka"} />
      </div>

      <div className="light__name">{name}</div>
    </div>

  )
};

export default Light;