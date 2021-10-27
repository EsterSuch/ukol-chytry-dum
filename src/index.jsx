import React from 'react';
import { render } from 'react-dom';
import './style.css';

import desc from './smartHomeData.js';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <>
    <div className="container">
      <Header title='Chytrý dům'/>
      <Dashboard data={desc}/>

    </div>
  </>
);

render(<App />, document.querySelector('#app'));
