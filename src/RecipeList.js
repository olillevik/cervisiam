import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './RecipeList.css';

class RecipeList extends Component {



  constructor(props) {
    super(props);

    const testdata = [
      {
        key: '1',
        name: 'Trippel my luck',
        desc: 'Feels like being struck by an Irish lepcrechaun'
      },
      {
        key: '2',
        name: 'Dubbel the fun',
        desc: 'Warm and dark. Wonderful aftertaste of raisins'

      },
      {
        key: '3',
        name: 'Quadruple the buzz',
        desc: 'Tired of thinking of funny mocked desciptions yet?'
      }
    ];

    this.state = {recipies:testdata};
    this.addRecipe = this.addRecipe.bind(this);
  }

  render() {
    return (
      <div className="RecipeList">
        {this.renderRecipes()}
        <Icon name='add circle' size='huge' onClick={this.addRecipe }/>
      </div>
    );
  }

  renderRecipes() {
    return this.state.recipies.map(beer => (
      <Card raised={true} centered={true} key={beer.key}>
        <Card.Header>{beer.name}</Card.Header>
        <Card.Content>{beer.desc}</Card.Content>
      </Card>
    ));
  }

  addRecipe() {
    console.log("Button pressed")
  }
}

export default RecipeList;
