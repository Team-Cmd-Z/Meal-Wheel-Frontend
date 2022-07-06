import React from 'react';
import "./Footer.css"



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
                    <li>Spin Meal Wheel</li>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Login</li>
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