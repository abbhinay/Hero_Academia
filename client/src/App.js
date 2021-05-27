import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comics from './components/Comics';

function App() {
  const [id, setId] = useState('');

  const getId = (id) => {
    setId(id);
    console.log(id);
  };

  return (
    <div className='App'>
      <Navbar hero={getId} />
      <div className='container'>
        {id && <Hero id={id} />} <Comics id={id} />
      </div>
    </div>
  );
}

export default App;
