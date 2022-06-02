import React from 'react'
import Nav from './Components/Nav'
import Container from './Components/Container'
import FavoritesView from './Components/FavoritesView'
import FavoriteNav from './Components/FavoriteNav'
import './App.css';
import { Route } from 'react-router-dom';

function App() {

  return (
    <main className="App">
      <Route exact path='/' render={() =>  {
        return (
          <div>
            <Nav />
            <Container />
          </div>
        )
      }} />
      <Route path='/favorites' render={() => {
        return (
          <div>
            <FavoriteNav />
            <FavoritesView />
          </div>
        )
      }} />
    </main>
  );
}

export default App;
