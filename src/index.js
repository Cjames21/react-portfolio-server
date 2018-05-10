import React from 'react';
import ReactDOM from 'react-dom';
import Body from './body.js';
import './css/index.css';
import './foundation/foundation.min.css';

class App extends React.Component {

  render() {
    return <Body />;
  }
}

//----------------------------------------------------------------------
// REACT DOM RENDER
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
