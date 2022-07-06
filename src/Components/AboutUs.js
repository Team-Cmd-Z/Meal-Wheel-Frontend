import React from 'react';
import "./AboutUs.css"

class AboutUs extends React.Component {
  render() {
    return (
      <div id='about-container'>
       <div id='pattern-splash'>
          <img id='Pattern' src='./images/Pattern.png' alt='pattern' />
              <h2 id='about-team'>About The Team</h2>
        </div>
        <body>
          <div id="grid-wrapper">
            <div id="aboutSection">
              <article>
                <img id="headshot" src="images/Elizabeth.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Elizabeth Beale</h3>
                  <p>Bio goes here</p>
                  <h3>Github</h3>
                  <a id="github" href="https://github.com/egbeale">My GitHub</a>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/KC.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">K.C.Lynn Hofstetter</h3>
                  <p>Bio goes here </p>
                  <h3>Github</h3>
                  <a id="github" href="https://github.com/khofstetter94">My GitHub</a>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/Elaine.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Elaine Huynh</h3>
                  <p>Hello! My name is Elaine, I am a critical care nurse. Having graduated from Seattle Pacific University in 2020, I continued my education at Bellevue College to gain a foundation in Java. Currently, I am a student at Code Fellows working on front-end development, and soon to be designing full-stack web applications. My goal is to use my background in healthcare as a future programmer to create applications to improve the health and wellness of users!</p>
                  <h3>Github</h3>
                  <a id="github" href="https://github.com/nurselaine">My GitHub</a>
                </section>
              </article>
              <article>
                <img id="headshot" src="images/Dominic.png" alt="description"/>
                <section class="bio">
                  <h3 id="name">Dominic Giacona</h3>
                  <p>Honorably discharged after serving a four year enlistment in the United States Navy. My college education consists of a bachelor's degree from George Mason University in business management and communication. My work experience is in UX/UI Design, Software Development, Startups and Entrepreneurship. Currently a student at Code Fellows studying advanced software development in python and full stack development.</p>
                  <h3>Github</h3>
                  <a id="github" href="https://github.com/dgiacona">My GitHub</a>
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
