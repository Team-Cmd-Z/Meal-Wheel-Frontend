import React from 'react';
import "./AboutUs.css"
import {BsGithub, BsLinkedin} from 'react-icons/bs';

class AboutUs extends React.Component {
  render() {
    return (
      <div id='about-container'>
       {/* <div id='pattern-splash'>
          <img id='Pattern' src='./images/Pattern.png' alt='pattern' />
              <h2 id='about-team'>About The Team</h2>
        </div> */}
        <body>
          <div id="grid-wrapper">
            <div id="aboutSection">
              <article>
                <img id="headshot" src="images/Elizabeth.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Elizabeth Beale</h3>
                  <p>Bio goes here</p>
                  <h3>Connect with me!</h3>
                  <a id="github" href="https://github.com/egbeale"><BsGithub/></a>
                  <a id="github" href="https://github.com/khofstetter94"><BsLinkedin/></a>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/KC.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">K.C.Lynn Hofstetter</h3>
                  <p>Hello, my name is KC Hofstetter and I am a software developer from Seattle, WA. Previously, I worked as a dental hygienist for 5 years before I made the switch to tech. I am currently a student at Code Fellows where I am developing my skills to become a full-stack developer. I hope to lean heavily into JavaScript and find a job based in Seattle. I'm excited to begin creating useful applications and to discover all the potential that the world of tech has to offer!</p>
                  <h3>Connect with me!</h3>
                  <div>
                  <a id="github" href="https://github.com/khofstetter94"><BsGithub/></a>
                  <a id="github" href="https://www.linkedin.com/in/kc-hofstetter/"><BsLinkedin/></a>
                  </div>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/Elaine.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Elaine Huynh</h3>
                  <p>Hello! My name is Elaine, I am a critical care nurse. Having graduated from Seattle Pacific University in 2020, I continued my education at Bellevue College to gain a foundation in Java. Currently, I am a student at Code Fellows working on front-end development, and soon to be designing full-stack web applications. My goal is to use my background in healthcare as a future programmer to create applications to improve the health and wellness of users!</p>
                  <h3>Connect with me!</h3>
                  <a id="github" href="https://github.com/nurselaine"><BsGithub/></a>
                  <a id="github" href="https://github.com/nurselaine"><BsLinkedin/></a>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/Dominic.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Dominic Giacona</h3>
                  <p>Honorably discharged after serving a four year enlistment in the United States Navy. My college education consists of a bachelor's degree from George Mason University in business management and communication. My work experience is in UX/UI Design, Software Development, Startups and Entrepreneurship. Currently a student at Code Fellows studying advanced software development in python and full stack development.</p>
                  <h3>Connect with me!</h3>
                  <a id="github" href="https://github.com/dgiacona"><BsGithub/></a>
                  <a id="github" href="https://github.com/dgiacona"><BsLinkedin/></a>
                </section>
              </article>
            </div>
          </div>
        </body>
      </div>
    )
  }
}

export default AboutUs;
