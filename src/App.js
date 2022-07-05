import React from 'react';
import './App.css';
import Header from './Components/Header';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <h2>Hello World</h2>
      </div>
    );
  }
}

export default App;
