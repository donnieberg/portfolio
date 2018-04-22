import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage.jsx';
import './css/main.scss';


ReactDOM.render(
  <Homepage />,
  document.getElementById('app')
);

module.hot.accept();

