import React from 'react';
import Light from '../Light';
import '../Lights/style.css';

const Lights = ({lights}) => {
  return (
    <>
      <div className="xxx">
        {lights.map(room =>
          <Light key={room.name} name={room.name} state={room.state} />
        )}
      </div>
    </>
  );
};

export default Lights;