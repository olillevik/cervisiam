import React, {Component} from 'react';
import {Header, Table} from 'semantic-ui-react';
import './Hops.css';

class Hops extends Component {

    constructor(props) {
        super(props);

        const testdata = {
            hops: [
                {
                    key: '1',
                    name: 'Styrian Golding',
                    aa: 5.2,
                    time: 30,
                    ibu: 15
                },
                {
                    key: '2',
                    name: 'Tettnanger',
                    aa: 4.5,
                    time: 90,
                    ibu: 20
                }
            ]
        };
        this.state = ({hopBill: testdata});
    }

    render() {
        return (
            <div className="Hops">
                <Header dividing as='h2'>Hops</Header>
                {this.renderHopBill()}
            </div>
        );
    }

    renderHopBill() {
        return <Table color={'teal'} selectable>
            <Table.Header>
                {this.renderHeaderRows()}
            </Table.Header>
            <Table.Body>
                {this.renderHops()}
            </Table.Body>
        </Table>
    }

    renderHeaderRows() {
        return (
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>AA</Table.HeaderCell>
                <Table.HeaderCell>IBU</Table.HeaderCell>
            </Table.Row>
        )
    }

    renderHops() {
        return this.state.hopBill.hops.map(hop => (
            <Table.Row onClick={this.doStuff(hop)} key={hop.key}>
                <Table.Cell>{hop.name}</Table.Cell>
                <Table.Cell>{hop.time} min</Table.Cell>
                <Table.Cell>{hop.aa} %</Table.Cell>
                <Table.Cell>{hop.ibu}</Table.Cell>
            </Table.Row>
        ));
    }

    doStuff = (key) => {

    };
}

export default Hops;
