import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quotes';
import Lamp from './Lampe';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      working : true
    }
  }
  changeAtome = () => {
    this.setState({working: !this.state.working})
  }
  render() {
    let atome = this.state.working ? "App-logo" : "App-logo-atome"
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={atome} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.changeAtome}>Modifier la vitesse du logo</button>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}
export default App;