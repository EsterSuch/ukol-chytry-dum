import React from 'react';
import Light from '../Light';
import '../Lights/style.css';

const Lights = ({ data.lights }) => {
  return (
    <>
      <div className="xxx">
        {data.lights.map(room =>
          <Light key={room.name} name={room.name} state={room.state} />
      </div>
    </>
  );
};

export default Lights;