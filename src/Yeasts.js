import React, {Component} from 'react';
import {Header, Segment, Grid} from 'semantic-ui-react';
import './Yeasts.css';
import Yeast from './Yeast';

class Yeasts extends Component {

    constructor(props) {
        super(props);

        const testdata = {
            key: '1',
            yeasts: [
                {
                    name: 'Safale S01',
                    attenuation: 85,
                    maxTemp: 23,
                    minTemp: 17
                }
            ]
        };
        this.state = ({yeastBill: testdata});
    }

    render() {
        return (
            <div className="Yeasts">
                <Header dividing as='h2'>Yeasts</Header>
                <Segment.Group>
                    <Segment>
                        <Grid columns={2} divided><Grid.Row stretched>
                            <Grid.Column ><Header as='h3'>Name</Header></Grid.Column>
                            <Grid.Column><Header as='h3'>Attenuation</Header></Grid.Column>
                        </Grid.Row></Grid>
                    </Segment>
                    <Segment>
                    {this.state.yeastBill.yeasts.map(yeast => (
                        <Yeast data={yeast}/>
                    ))}
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

export default Yeasts;
