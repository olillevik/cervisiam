import React, {Component} from 'react';
import {Button, Grid, Input, Label, Segment} from 'semantic-ui-react'

class RecipeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            item: this.props.data
        };
    }

    render() {
        return (
            <div className="Yeast">
                {this.renderWithState()}
            </div>
        );
    }


    renderWithState() {
        if (this.state.canEdit === true) {
            return this.renderEditable()
        }
        else {
            return this.renderNonEditable()
        }
    }

    renderNonEditable() {
        return (
            <Grid columns={2} divided>
                <Grid.Row stretched onClick={this.editable}>
                    {Object.keys(this.props.data).filter(key => (key != 'key')).map(key => (
                        <Grid.Column>{this.props.data[key]}</Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        );
    }

    renderEditable() {
        return (
            <Segment raised>
                <Label attached='top right' onClick={this.removeMe}>Remove item</Label>
                <Grid columns={2} divided>
                    <Grid.Row stretched>
                        {Object.keys(this.props.data).filter(key => (key != 'key')).map(key => (
                            <Grid.Column><Input name={key} defaultValue={this.props.data[key]}onChange={this.updateField}/></Grid.Column>
                        ))}
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group floated='right'>
                                <Button onClick={this.notEditable}>Cancel</Button>
                                <Button.Or/>
                                <Button positive onClick={this.updateMe}>Save</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }

    editable = () => this.setState({canEdit: true});
    notEditable = () => this.setState({canEdit: false});

    updateField = (event) => {
        var tempItem = this.state.item;
        tempItem[event.target.name] = event.target.value;
        this.setState(tempItem);
    }

    removeMe = () => {
        this.props.removeItem({
            data: {
                key: this.props.data.key,
            }
        });
    }

    updateMe = () => {
        console.log(this.props);
        this.props.updateItem(this.state.item);
        this.notEditable();
    }
}

export default RecipeItem;
