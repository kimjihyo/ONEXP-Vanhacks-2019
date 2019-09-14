import React from 'react';
import { Typography } from '@material-ui/core';
import './App.css';

import SampleComponent from './components/SampleComponent.jsx';

function App() {
  return (
    <div className="App">
      <SampleComponent />

      <Typography variant='h6'>
        App
      </Typography>
    </div>
  );
}

export default App;
