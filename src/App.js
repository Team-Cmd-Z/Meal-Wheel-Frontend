import React from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Faq from './Components/Faq';
import SavedRecipes from './Components/SavedRecipes';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {withAuth0} from '@auth0/auth0-react'
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
// import Profile from './Components/Profile';


class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     cuisines: ['African', 'American', 'Cajun', 'French', 'Italian', 'Jewish', 'Mediterranean', 'Mexican', 'Southern', 'Thai', 'Caribbean', 'Chinese'],
  //   }
  // }

  render() {
    return (
      <Router>
      <div className="page-container">
      <div className='content-wrap'>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>
        <Route path='/SavedRecipes' element={<SavedRecipes/>}></Route>
        </Routes>
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default withAuth0(App);
