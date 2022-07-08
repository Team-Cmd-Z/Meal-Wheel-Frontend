import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";



class Footer extends React.Component {
  render() {
    return (
      <>
        <div className='main-footer'>
            <div className='container'>
              <div className='row'>
                {/* {column1} */}
                <div className='col'>
                  <h4>Contact Info</h4>
                  <ul className='list-unstyled'>
                    <li>1-800-Meal</li>
                    <li>New York, NY</li>
                    <li>123 street</li>
                  </ul>
                </div>
                {/* {column2} */}
                <div className='col'>
                  <h4>Navigation</h4>
                  <ul className='list-unstyled'>
                    <li><Link to="/">Spin Meal Wheel</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/Faq">FAQ</Link></li>
                    <li><Link to="/SavedRecipes">Saved Recipes</Link></li>
                  </ul>
                </div>
                {/* {column3} */}
                <div className='col'>
                  <h4>Social Links</h4>
                  <ul className='list-unstyled'>
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
              <hr/>
              <div className='row'>
                <p className='col-sm'>
                  &copy;{new Date().getFullYear()} Meal Wheel Inc | All Rights Reserved
                </p>

              </div>
            </div>
        </div>
      </>
    );
  }
}

export default Footer;