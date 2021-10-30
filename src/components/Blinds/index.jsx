import React, { useState } from 'react';
import '../Blinds/style.css';

import roztazeno from '../Blinds/blinds-open.svg';
import zatazeno from '../Blinds/blinds-closed.svg';


const Blinds = ({state}) => {

  const [zaves, setZaves] = useState(state);
  
  const blindsOn = () => {
     setZaves('open'); 
  };
  const blindsOff = () => {
     setZaves('close');
  };

  return (
    <>
      <div className="blinds">
        <div className="blinds__icon">
          <img
            src={zaves==='open' ? roztazeno : zatazeno}
            alt={zaves==='open' ? "roztaženo" : "zataženo"}
          />
        </div>

        <div className="blinds__name">Žaluzie</div>

        <div className="blinds__controls">
          <button onClick={blindsOn} className={zaves==='open' ? 'button button--active' : 'button '}>Otevřeno</button>
          <button onClick={blindsOff} className={zaves==='close' ? 'button button--active' : 'button '}>Zavřeno</button>
          
        
        </div>
      </div>
    
    </>
  )

};

export default Blinds;