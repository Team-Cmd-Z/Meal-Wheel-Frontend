import React from 'react';
import RecipeCard from './RecipeCard';
import data from '../data.json';
import Faq from './Faq.js';
import Wheel from './Wheel.js';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCuisine: 0,
    }
  }

  getSelectedCuisine = (cuisine) => {
    this.setState({
      selectedCuisine: cuisine
    })
  }

  render() {
    let filteredRecipes = data;
    console.log(this.state.selectedCuisine);
    return (
      <div className='home-container'>
        <div id='home-splash'>
          <img id='homeSplash-img' src='./images/homeSplash.png' alt='vegetable plate' />
          <Wheel cuisines={this.props.cuisines} updateCuisine={this.getSelectedCuisine} />
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
      </div>
    )
  }
}

export default Home;