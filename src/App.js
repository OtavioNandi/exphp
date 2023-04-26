import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MyCarousel } from './MyCarousel';
import { Titulo } from './components/Titulo';
import { ToggleVisibility } from './components/ToggleVisibility';


function App() {
  return (
    <div className='general'>
      <Titulo />
      <header className='App-header'>
        <ToggleVisibility>
          <MyCarousel />
        </ToggleVisibility>
      </header>
    </div>
  )
}

export default App;
