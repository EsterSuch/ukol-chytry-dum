import React, {useState} from 'react';
import '../Light/style.css';

import sviti from '../Light/light-on.svg';
import nesviti from '../Light/light-off.svg';


const Light = ({ name, state }) => {

  <div className="light__name">
    <p>{name}</p>
  </div>

  const [svetlo, setSvetlo] = useState(state);
  const zapnout = () => {
    setSvetlo('on');
  };
  const vypnout = () => {
    setSvetlo('off');
  };

  return (
    <div className="light" onClick={svetlo ? zapnout : vypnout}>
      
      <img className="light__icon"
        src={svetlo ? sviti : nesviti}
        alt={svetlo ? "Zapnutá žárovka" : "Vypnutá žárovka"}
      />


    </div>
  )
};

export default Light;