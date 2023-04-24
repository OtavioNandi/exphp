import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MyCarousel } from './MyCarousel';
import { Titulo } from './components/Titulo';
import { ToggleVisibility } from './components/ToggleVisibility';


function App() {
  return (
    <>
      <Titulo />
      <header className='App-header'>
        <ToggleVisibility>
          <MyCarousel />
        </ToggleVisibility>
      </header>
    </>
  )
}

export default App;
