import React, { Component } from 'react';
// import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';
import data from './dummy_data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      view: 'home'
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
          <h1 className="App-title" onClick={() => this.changeView('home')}>ROBERT CHUNG</h1>
        </header>   
        <ul className = "content">
          <li className={this.state.view === 'applications' ? 'active' : 'inactive'} onClick={() => this.changeView('applications')}> Applications </li> 
          <li className={this.state.view === 'media' ? 'active' : 'inactive'} onClick={() => this.changeView('media')}> Media </li>
          <li className = 'inactive' > Dreams </li>                     
          <li className = 'inactive' > Marketing </li>           
          <li className = 'inactive' > Resume </li> 
        </ul>
          {
            this.state.view === 'home' ?
            <p className="new-intro">
              Full-Stack Software Engineer from Pittsburgh<br/>
              I love Web Development, Social Innovation, and Tacos<br/>
            </p>
            :
            <Shelf shelf={this.state.data[this.state.view]}/>
          }
      </div>
    );
  };
}

export default App;
