import React, { Component } from 'react';
// import logo from './assets/logo.png';
import './App.css';
import Shelf from './components/Shelf.js';
import data from './data.js';
import gitImg from './assets/github.svg';
import linkImg from './assets/linkedin.svg';
import emailImg from './assets/email.svg';

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
          <li className={this.state.view === 'media' ? 'active' : 'inactive'} onClick={() => this.changeView('media')}> Media & Marketing</li>
          <li className = {this.state.view === 'dreams' ? 'active' : 'inactive'} onClick={() => this.changeView('dreams')} > Dreams </li>                     
          <li className = {this.state.view === 'contact' ? 'active' : 'inactive'} onClick={() => this.changeView('contact')} > Contact </li>           
        </ul>
          {
            this.state.view === 'home' ?
            <p className="new-intro">
              Full-Stack Software Engineer from Pittsburgh<br/>
              I love Web Development, Social Innovation, and Tacos<br/>
            </p>
            :
            this.state.view === 'applications' ?
            <p className="new-intro">
              Full-Stack Software Engineer from Pittsburgh<br/>
              I love Web Development, Social Innovation, and Tacos<br/>
              Strengths: Node, VueJS, React, Express, AngularJS, SQL, Redis, Sockets
              <Shelf shelf={this.state.data[this.state.view]}/>
            </p>
            :
            this.state.view === 'media' ?
            <p className="new-intro">
              Designed and managed various marketing, video, and music <br/>
              campaigns for businesses and my own personal pursuits<br/>
              <Shelf shelf={this.state.data[this.state.view]}/>
            </p>
            :
            this.state.view === 'dreams' ?
            <p className="new-intro">
              <Shelf shelf={this.state.data[this.state.view]}/>
            </p>
            :
            this.state.view === 'contact' ?
            <p className="new-intro">
              <a href="mailto:chungrob@gmail.com"><img src = {emailImg} alt="Email" className="social-icons"/></a>
              <a href="https://github.com/grungebob"><img src = {gitImg} alt="GitHub" className="social-icons"/></a>
              <a href="https://linkedin.com/in/robert-chung"><img src = {linkImg} alt="Linkedin" className="social-icons"/></a>
            </p>
            :
            <p className="new-intro">
              Full-Stack Software Engineer from Pittsburgh<br/>
              I love Web Development, Social Innovation, and Tacos<br/>
            </p>
            
          }
      </div>
    );
  };
}

export default App;
