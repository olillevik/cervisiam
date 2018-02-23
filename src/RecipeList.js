import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './RecipeList.css';

class RecipeList extends Component {


  addRecipe = () => {
    console.log("Button pressed");
  }

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

    this.state = { recipies: testdata };
  }

  render() {
    return (
      <div className="RecipeList">
        {this.renderRecipes()}
        <a href='./recipe'>
          <Icon name='add circle' size='huge' /> <br />
          Add new recipe
        </a>
      </div>
    );
  }

  renderRecipes() {
    return this.state.recipies.map(beer => (
      <Card raised={true} centered={true} key={beer.key} href='./recipe'>
        <Card.Header>{beer.name}</Card.Header>
        <Card.Content>{beer.desc}</Card.Content>
      </Card>
    ));
  }
}

export default RecipeList;
