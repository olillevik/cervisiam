import React, {Component} from 'react';
import {Grid, Header, Label, Segment} from 'semantic-ui-react';
import './Yeasts.css';
import Yeast from './Yeast';

class Yeasts extends Component {

    constructor(props) {
        super(props);

        const testdata = {
            yeasts: [
                {
                    key: '1',
                    commonName: 'Safale S01',
                    attenuation: 85
                },
                {
                    key: '2',
                    commonName: 'WLP001 Califonia Ale',
                    attenuation: 80
                }
            ]
        };
        this.state = ({yeasts: testdata.yeasts});
    }

    render() {
        return (
            <div className="Yeasts">
                <Segment.Group>

                    <Segment raised>
                        <Header as='h2'>Yeasts</Header>
                        <Label attached='top right' onClick={this.addItem}>Add Yeast</Label>
                    </Segment>
                    <Segment>
                        <Grid columns={2} divided><Grid.Row stretched>
                            <Grid.Column><Header as='h3'>Name</Header></Grid.Column>
                            <Grid.Column><Header as='h3'>Attenuation</Header></Grid.Column>
                        </Grid.Row></Grid>

                        {this.state.yeasts.map(yeast => (
                            <Yeast data={yeast} updateItem={this.updateItem} removeItem={this.removeItem} key={yeast.key}/>
                        ))}
                    </Segment>
                </Segment.Group>
            </div>
        );
    }

    addItem = () => {
        var newYeast = {
            key: this.uuid(),
            commonName: 'Unknown',
            attenuation: '80'
        }
        this.setState({yeasts: [...this.state.yeasts, newYeast]});
    }

    uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

    removeItem = (callbackFromChild) => {

        this.setState({yeasts: this.state.yeasts.filter(yeast => yeast.key != callbackFromChild.yeast.key)})
    }

    updateItem = (callbackFromChild) => {

        var newYeastBill = this.state.yeasts.map(yeast => this.replaceIfMatch(yeast, callbackFromChild.yeast));
        this.setState({yeasts: newYeastBill});

    }

    replaceIfMatch = (original, replacement) => {
        return (original.key === replacement.key ? replacement : original);
    };
}

export default Yeasts;
