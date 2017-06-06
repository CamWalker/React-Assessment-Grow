import React, { Component } from 'react';

import ListItem from './ListItem';
import './ListContainer.css';

class ListContainer extends Component {


  render() {
    let people = '';
    if (this.props.personList) {
      people = this.props.personList.map(v => {
        return <ListItem
                  key={v.name}
                  info={v}
                  selectPerson={(info) => this.props.selectPerson(info)}
                  selectedPerson={this.props.selectedPerson}
                />
      })
    }

    return (
      <div className="table-container">
        <h3 className="list-title">List &nbsp;/&nbsp; <span className="list-title-blue">{this.props.senator ? "Senators" : "Representatives"}</span></h3>
        <table className="table" cellSpacing="0">
          <thead>
            <tr className="thead">
              <th>Name</th>
              <th>Party</th>
            </tr>
          </thead>
          <tbody>
            {people}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListContainer;
