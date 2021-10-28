import React, { useState } from 'react';
import '../Climate/style.css';

import temp from '../Climate/temp.svg';

const Climate = ({ temperature, humidity }) => {
  const [teplota, setTeplota] = useState(temperature);
  const plus = () => {
    setTeplota(teplota + 1);
  };
  const minus = () => {
    setTeplota(teplota - 1);
  };

  return (
    <>
      <div className="climate">

        <div className="climate__icon">
          <img src={temp} alt="teplota" />
        </div>

        <div className="climate__content">
          <div className="climate__temperature">{teplota}&deg;C</div>
          <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
        </div>
        <div className="climate__controls">
          <button className="button" onClick={plus}>+</button>
          <button className="button"onClick={minus}>-</button>
        </div>

      </div>
    </>
  )
};

export default Climate;