import React, { useState } from 'react';
import '../Light/style.css';

import sviti from '../Light/light-on.svg';
import nesviti from '../Light/light-off.svg';


const Light = ({ name, state }) => {

  const [svetlo, setSvetlo] = useState(state);
  const zapnout = () => {
    setSvetlo('on');
  };
  const vypnout = () => {
    setSvetlo(state='off');
  };

  return (
    <div className="light" onClick={svetlo==='on' ? vypnout : zapnout}>
      <div className="light__icon">
        <img
          src={svetlo==='on' ? sviti : nesviti}
          alt={svetlo==='on' ? "sviti" : "nesviti"} />
      </div>

      <div className="light__name">{name}</div>
    </div>

  )
};

export default Light;