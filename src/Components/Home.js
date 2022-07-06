import React from 'react';
import Header from './Header';
import RecipeCard from './RecipeCard';
import data from '../data.json';
import Faq from './Faq.js';
import './Home.css';

class Home extends React.Component {
  render() {
    let filteredRecipes = data;
    console.log(filteredRecipes);
    return (
      <>
        <div id='home-splash'>
          <img id='homeSplash-img' src='./images/homeSplash.png' alt='vegetable plate' />
        </div>
        <section>
          <h1>Try one of these recipes</h1>
          <div className='parent'>
            {filteredRecipes.map((recipe, i) => {
              return (
                <div className={`div${i + 1}`}>
                  <RecipeCard
                    obj={recipe}
                  />
                </div>
              )
            })}
          </div>
        </section>
        <Faq />
      </>
    )
  }
}

export default Home;