import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import Container from './Components/Container';
import FavoritesView from './Components/FavoritesView';
import FavoriteNav from './Components/FavoriteNav';
import Error from './Components/Error';
import './styling/App.css';

const App = () => {
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
};

export default App;
