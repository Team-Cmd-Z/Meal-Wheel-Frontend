import React from 'react';
import RecipeCard from './RecipeCard';
import Faq from './Faq.js';
import Wheel from './Wheel.js';
import './Home.css';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCuisine: null,
      cuisines: ['African', 'American', 'Cajun', 'French', 'Italian', 'Jewish', 'Mediterranean', 'Mexican', 'Southern', 'Thai', 'Caribbean', 'Chinese'],
      mealsArr: [],
    }
  }
  getSelectedCuisine = (cuisine) => {
    this.setState({
      selectedCuisine: cuisine
    })
  }
  getSixMeals = async (index) => {
      try {
        let cuisine = this.state.cuisines[index];
        let url = `${process.env.REACT_APP_SERVER}/recipes?cuisine=${cuisine}`;
        console.log(cuisine);
        let receivedMeals = await axios.get(url);
        this.setState({
          mealsArr: receivedMeals.data,
        })
        console.log(receivedMeals.data);
      } catch (error) {
        console.log('Oops')
      }
  }

  render() {

    // console.log(this.state.selectedCuisine);
    // console.log(this.state.receivedMeals);

    return (
      <div className='home-container'>
        <div id='home-splash'>
          <img id='homeSplash-img' src='./images/homeSplash.png' alt='vegetable plate' />
          <Wheel 
            cuisines={this.state.cuisines} 
            updateCuisine={this.getSelectedCuisine}
            getSixMeals={this.getSixMeals}
            />
        </div>
        <section>
          {this.state.mealsArr && <>
            <h1>Try one of these recipes</h1>
            <div className='parent'>
              {this.state.mealsArr.map((recipe, i) => {
                return (
                  <div key={i} className={`div${i + 1}`}>
                    <RecipeCard
                      obj={recipe}
                    />
                  </div>
                )
              })}
            </div>
          </>}
        </section>
        <Faq />
      </div>
    )
  }
}

export default Home;