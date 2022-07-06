import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';


class App extends React.Component {
  render() {
    return (
      <div className="page-container">
      <div className='content-wrap'>
        <Header />
        <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
