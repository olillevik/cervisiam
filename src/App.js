import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={RecipeList} />
          <Route path='/recipe' component={Recipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
