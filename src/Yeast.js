import React, {Component} from 'react';
import {Button, Grid, Input, Segment, Label} from 'semantic-ui-react'

class Yeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            commonName: props.data.commonName,
            attenuation: props.data.attenuation
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
                    <Grid.Column>{this.props.data.commonName}</Grid.Column>
                    <Grid.Column>{this.props.data.attenuation}</Grid.Column>
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
                        <Grid.Column>
                            <Input defaultValue={this.props.data.commonName} onChange={this.updateName}/>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Input defaultValue={this.props.data.attenuation} onChange={this.updateAttenuation}/>
                        </Grid.Column>
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
    updateName = (event) => this.setState({commonName: event.target.value});
    updateAttenuation = (event) => this.setState({attenuation: event.target.value});

    removeMe = () => {
        this.props.removeItem({
            yeast: {
                key: this.props.data.key,
            }
        });
    }

    updateMe = () => {
        console.log(this.props);
        this.props.updateItem({
            yeast: {
                key: this.props.data.key,
                commonName: this.state.commonName,
                attenuation: this.state.attenuation
            }
        });
        this.notEditable();
    }
}

export default Yeast;
