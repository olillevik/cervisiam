import React, {Component} from 'react';
import {Grid, Header, Label, Segment} from 'semantic-ui-react';
import './Yeasts.css';
import RecipeItem from './RecipeItem';

class Yeasts extends Component {

    constructor(props) {
        super(props);

        const testdata = {
            headings: ['Name,', 'Attenuation'],
            data: [
                {
                    key: '1',
                    name: 'Safale S01',
                    attenuation: 85
                },
                {
                    key: '2',
                    name: 'WLP001 Califonia Ale',
                    attenuation: 80
                }
            ]
        };
        this.state = ({data: testdata.data, headings: testdata.headings});
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
                        {this.renderHeadings()}
                        {this.renderRows()}
                    </Segment>
                </Segment.Group>
            </div>
        );
    }

    renderHeadings = () => {
        return <Grid columns={2} divided><Grid.Row stretched>
            {this.state.headings.map(heading => (
                <Grid.Column key={heading}><Header as='h3'>{heading}</Header></Grid.Column>
            ))}
        </Grid.Row></Grid>
    }

    renderRows = () => {
        return this.state.data.map(item => (
            <RecipeItem data={item} updateItem={this.updateItem} removeItem={this.removeItem}
                        key={item.key}/>
        ));
    }

    addItem = () => {
        var newItem = {
            key: this.uuid(),
            name: 'Unknown',
            attenuation: '80'
        }
        this.setState({data: [...this.state.data, newItem]});
    }

    uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

    removeItem = (callbackFromChild) => {
        console.log(this.state.data);
        console.log(callbackFromChild);
        this.setState({data: this.state.data.filter(item => item.key != callbackFromChild.data.key)})
    }

    updateItem = (callbackFromChild) => {
        console.log(callbackFromChild);
        var items = this.state.data.map(item => this.replaceIfMatch(item, callbackFromChild));
        this.setState({data: items});

    }

    replaceIfMatch = (original, replacement) => {
        return (original.key === replacement.key ? replacement : original);
    };
}

export default Yeasts;
