import React, { Component } from 'react';
import './Recipe.css';
import Hops from './Hops';
import Yeasts from './Yeasts';
import { Header } from 'semantic-ui-react';
import Fermentables from './Fermentables';

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe" align="left">
        <Header as='h1'>Tripel my luck</Header>
        <p>Feels like being struck by an Irish lepcrechaun</p>
        <Fermentables />
        <Hops />
        <Yeasts />
      </div>
    );
  }


  renderYeasts() {

  }

}

export default Recipe;
