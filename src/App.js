import React from 'react';
import Nav from './Components/Nav'
import Container from './Components/Container'
import './App.css';
import { fetchData } from './features/allArt/allArtAPI'
function App() {

  return (
    <main className="App">
      <Nav />
      <Container />
    </main>
  );
}

export default App;
