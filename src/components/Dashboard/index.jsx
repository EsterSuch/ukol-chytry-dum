import React from 'react';
import '../Dashboard/style.css';
import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';


const Dashboard = () => {
  return (
    <>
      <main className="dashboard">

        <Lights />
        <Climate />
        <Blinds />
        <Energy />

      </main>

    </>
  )
};

export default Dashboard;