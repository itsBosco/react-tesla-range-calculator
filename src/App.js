import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 20,
    min: 10,
    max: 110
  }
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal} />
      </div>
    );
  }
}

export default App;
