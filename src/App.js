import React from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cuisines: ['African', 'American', 'Cajun', 'French', 'Italian', 'Jewish',
        'Mediterranean', 'Mexican', 'Southern', 'Thai', 'Caribbean', 'Chinese'],
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className='content-wrap'>
          <Header />
          <Home cuisines={this.state.cuisines} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
