import React, { Component } from 'react';
import axios from 'axios';

import Selectors from './components/Selectors';
import ListContainer from './components/ListContainer';
import Info from './components/Info';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
      senator: true,
      selectedPerson: {},
      personList: []
    }
  }

  queryPeople = (vals) => {
    this.setState({ state: vals.state, senator: vals.senator });
    if (vals.senator) {
      axios.get(`/senators/${vals.state}`)
        .then((result) => this.setState({personList: result.data.results, selectedPerson: result.data.results[0]}));
    } else {
      axios.get(`/representatives/${vals.state}`)
        .then((result) => this.setState({personList: result.data.results, selectedPerson: result.data.results[0]}));
    }
  }

  selectPerson = (info) => {
    this.setState({ selectedPerson: info });
  }


  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="title-container">
          <h1 className="title">Who's My Representative?</h1>
        </div>
        <Selectors queryPeople={(vals) => this.queryPeople(vals)} />
        <div className="content">
          <ListContainer
            personList={this.state.personList}
            senator={this.state.senator}
            selectedPerson={this.state.selectedPerson}
            selectPerson={(info) => this.selectPerson(info)}
          />
          <Info info={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default App;
