import React, { Component } from 'react';
import { Table, Header } from 'semantic-ui-react';
import './Yeasts.css';

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
    this.state = ({ yeastBill: testdata });
  }

  render() {
    return (
      <div className="Yeasts">
        <Header dividing as='h2'>Yeasts</Header>
        {this.renderYeastBill()}
      </div>
    );
  }

  renderYeastBill() {
    return <Table celled color={'blue'} selectable>
      <Table.Header>
        {this.renderHeaderRows()}
      </Table.Header>
      <Table.Body>
        {this.renderYeasts()}
      </Table.Body>
    </Table>
  }

  renderHeaderRows() {
    return (
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Attenuation</Table.HeaderCell>
        <Table.HeaderCell>Maximum temperature</Table.HeaderCell>
        <Table.HeaderCell>Minimum temperature</Table.HeaderCell>
      </Table.Row>
    )
  }

  renderYeasts() {
    return this.state.yeastBill.yeasts.map(yeast => (
      <Table.Row>
        <Table.Cell>{yeast.name}</Table.Cell>
        <Table.Cell>{yeast.attenuation} %</Table.Cell>
        <Table.Cell>{yeast.maxTemp} °C</Table.Cell>
        <Table.Cell>{yeast.minTemp} °C</Table.Cell>
      </Table.Row>
    ));
  }
}

export default Yeasts;
