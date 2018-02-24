import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import './Fermentables.css';

class Fermentables extends Component {

  constructor(props) {
    super(props);

    const testdata = {
      key: '1',
      fermentables: [
        {
          name: 'Pilsner',
          percentage: 90,
          colorLovibond: 1,
          ppg: 37
        },
        {
          name: 'Munich',
          percentage: 2,
          colorLovibond: 6,
          ppg: 36
        },
        {
          name: 'Dextrose',
          percentage: 8,
          colorLovibond: 0,
          ppg: 46
        }
      ]
    };
    this.state = ({ bill: testdata });
  }

  render() {
    return (
      <div className="Fermentables">
        <Header dividing as='h2'>Fermentables</Header>
        {this.renderBill()}
      </div>
    );
  }

  renderBill() {
    return <Table selectable color={'green'}>
      <Table.Header>
        {this.renderHeaderRows()}
      </Table.Header>
      <Table.Body>
        {this.renderFermentables()}
      </Table.Body>
    </Table>
  }

  renderHeaderRows() {
    return (
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>PPG</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Colour</Table.HeaderCell>
      </Table.Row>
    )
  }

  renderFermentables() {
    return this.state.bill.fermentables.map(fermentable => (
      <Table.Row>
        <Table.Cell>{fermentable.name}</Table.Cell>
        <Table.Cell textAlign='center'>{fermentable.percentage} %</Table.Cell>
        <Table.Cell textAlign='center'>{fermentable.ppg}</Table.Cell>
        <Table.Cell textAlign='center'>{fermentable.colorLovibond} L</Table.Cell>
      </Table.Row>
    ));
  }
}

export default Fermentables;
