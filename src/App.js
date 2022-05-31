import React from 'react';
import Nav from './Components/Nav'
import Container from './Components/Container'
import './App.css';

import { useGetArtByIdQuery } from './features/currentArt/currentArtAPI'


function App() {
  const id = 144633
  const { data, isSuccess, isError, isLoading } = useGetArtByIdQuery(id)

  console.log('data APP:', data)
  return (
    <main className="App">
      <Nav />
      <Container />
    </main>
  );
}

export default App;
