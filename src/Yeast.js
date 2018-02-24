import React, {Component} from 'react';
import {Button, Grid, Input, Segment} from 'semantic-ui-react'

class Yeast extends Component {

    constructor(props) {
        super(props);
        this.state = {editable: false};
    }

    render() {
        return (
            <div className="Yeast"> {this.renderWithState()}</div>
        );
    }


    renderWithState() {
        console.log("Rendering with state " + this.state.editable);
        if (this.state.editable === true) {
            return this.renderEditable()
        }
        else {
            return this.renderNonEditable()
        }
    }

    renderNonEditable() {
        return (
            <Grid columns={2} divided>
                <Grid.Row stretched onClick={this.editable}><Grid.Column>{this.props.data.name}</Grid.Column>
                    <Grid.Column>{this.props.data.attenuation}</Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    renderEditable() {
        return (
            <Segment raised>
                <Grid columns={2}>
                    <Grid.Row stretched>
                        <Grid.Column><Input defaultValue={this.props.data.name}/></Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Input defaultValue={this.props.data.attenuation}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group floated='right'>
                                <Button onClick={this.notEditable}>Cancel</Button>
                                <Button.Or/>
                                <Button positive>Save</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }

    editable = () => this.setState({editable: true});
    notEditable = () => this.setState({editable: false});
}

export default Yeast;
