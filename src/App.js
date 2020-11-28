
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import BeerList from './components/beerlist/BeerList';
import BeerItem from './components/beeritem/BeerItem';
import RandomBeer from './components/random-beer/RandomBeer';
import NewBeer from './components/newbeer/NewBeer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={BeerList} />
          <Route exact path="/beers/:id" component={BeerItem} />
          <Route path="/randombeer" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;