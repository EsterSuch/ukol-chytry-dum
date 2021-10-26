import React from 'react';
import Light from '../Light';
import '../Lights/style.css';

const Lights = ({lights}) => {
  return (
    <>
      <div className="xxx">
        {lights.map(light =>
          <Light key={light.name} name={light.name} state={light.state} />)}
      </div>
    </>
  )
};

export default Lights;