import React from 'react';
import '../Light/style.css';

import sviti from '../Light/light-on.svg';
import nesviti from '../Light/light-off.svg';

const Light = ({ name, state }) => {

  <div className="light__name">
    <p>{name}</p>
  </div>

  const [jeZapnuta, setJeZapnuta] = useState({ state });
  const zapnout = () => {
    setJeZapnuta(true);
  };
  const vypnout = () => {
    setJeZapnuta(false);
  };

  return (
    <div className="light" onClick={jeZapnuta ? zapnout : vypnout}>
      <img
        src={jeZapnuta ? sviti : nesviti}
        alt={jeZapnuta ? "Zapnutá žárovka" : "Vypnutá žárovka"}
        className="light__icon" />


    </div>
  )
};

export default Light;