// import React from 'react'
import * as React from "react";
import Nav from './Components/Nav'
import Container from './Components/Container'
import FavoritesView from './Components/FavoritesView'
import FavoriteNav from './Components/FavoriteNav'
import Error from './Components/Error'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <main className="App">
      <Switch>
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
        <Route path="*" component={Error}/>
      </Switch>
    </main>
  );
}

export default App;
