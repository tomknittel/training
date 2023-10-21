import React, { Component } from 'react';

class DynamicTableCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      tableData: [], // Ein leeres Array, um die Tabellendaten zu speichern
    };
  }

  // Diese Methode wird aufgerufen, um die Tabelle und Daten dynamisch zu erstellen
  createTable = () => {
    this.setState({
      showTable: true,
      tableData: [
        { name: 'Alice', age: 25,geschlecht: "female"},
        { name: 'Bob', age: 30, geschlecht:"male" },
        { name: 'Charlie', age: 22, geschlecht:"male" },
        { name: "Tom", age: 22, geschlecht:"male"}
        // Weitere Datensätze hier hinzufügen
      ],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.createTable}>Tabelle erstellen</button>
        {this.state.showTable && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Alter</th>
                <th>Geschlect</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.geschlecht}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default DynamicTableCreator;
