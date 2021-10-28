import React from 'react';
import '../Energy/style.css';

import proud from '../Energy/electricity.svg';
import voda from '../Energy/water.svg';

const Energy = ({electricity, water}) => {
  return (
    <>
      <div className="energy">
        
        <div className="energy__source">
          <div className="energy__icon">
            <img src={proud} alt="proud" />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Elektřina</div>
            <div className="energy__value">{electricity} kW</div>
          </div>
        </div>

        <div className="energy__source">
          <div className="energy__icon">
            <img src={voda} alt="voda" />
          </div>
          <div className="energy__consumption">
            <div className="energy__description">Voda</div>
            <div className="energy__value">{water} m<sup>3</sup></div>
          </div>
        </div>

      </div>

    </>
  )

};

export default Energy;