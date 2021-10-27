import React from 'react';
import '../Dashboard/style.css';
import Lights from '../Lights';


const Dashboard = ({data}) => {
  return (
    <>
      <main className="dashboard">
        {data.map(info => (
          <Lights lights={info.lights} />
        ))}
        <Lights />
      </main>
    
    </>
  );
}

export default Dashboard;