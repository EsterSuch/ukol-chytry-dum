import React, { useState } from 'react';
import '../Blinds/style.css';

import roztazeno from '../Blinds/blinds-open.svg';
import zatazeno from '../Blinds/blinds-closed.svg';

const Blinds = () => {
  const [zaves, setZaves] = useState(open);
  const blindsOpen = () => {
    setZaves(open);
  };
  const blindsOff = () => {
    setZaves(close);
  };
  return (
    <>
      <div className="blinds">
        <div className="blinds__icon">
          <img
            src={zaves ? roztazeno : zatazeno}
            alt={zaves ? "roztaženo" : "zataženo"}
          />
        </div>

        <div className="blinds__name">Žaluzie</div>

        <div className="blinds__controls">
          <button onClick={blindsOpen} className={open ? 'button button--active' : 'button'}>Otevřeno</button>
          <button onClick={blindsOff} className={!open ? 'button' : 'button button--active'}>Zavřeno</button>
        </div>
      </div>
    
    </>
  )


};

export default Blinds;