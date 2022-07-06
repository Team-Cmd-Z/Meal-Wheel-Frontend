import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
      <div className='content-wrap'>
        <Header />
        <h2>Hello World</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
