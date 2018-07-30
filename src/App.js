import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';
import data from './dummy_data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      view: 'shelf1'
    }
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Robert Chung</h1>
        </header>
        <p className="App-intro">
          Full-Stack Software Engineering Dude from Pittsburgh<br/>
          I love Web Development, Social Innovation, and Tacos.<br/>
        </p>
        <ul>
          <li className={this.state.view === 'shelf1' ? 'active' : 'inactive'} onClick={() => this.changeView('shelf1')}> Applications </li> 
          <li className={this.state.view === 'shelf2' ? 'active' : 'inactive'} onClick={() => this.changeView('shelf2')}> Media </li>
          <li className = 'inactive' > Resume </li> 

        </ul>
        <Shelf shelf={this.state.data[this.state.view]} handleClick={this.handleClick}/>
      </div>
    );
  };
}

export default App;
