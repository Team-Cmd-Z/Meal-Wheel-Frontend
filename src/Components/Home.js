import React from 'react';
import RecipeCard from './RecipeCard';
import Faq from './Faq.js';
import Wheel from './Wheel.js';
import './Home.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCuisine: null,
      cuisines: ['American', 'Cajun', 'French', 'Italian', 'Jewish', 'Japanese', 'Mediterranean', 'Mexican', 'Southern', 'Thai', 'Caribbean', 'Chinese'],
      mealsArr: [],
      chosenRecipe: {},
      showModal: false,
      modal: {},
      recipeToDisplay: {}
    }
  }

  handleOnHideModal = () => {
    this.setState({
      ...this.state,
      showModal: false,
      // modal: {}
    });
  };

  handleOnShowModal = (recipe) => {
    this.setState({
      ...this.state,
      chosenRecipe: recipe,
      modal: {
        // title: this.state.chosenRecipe.title,
        // image: this.state.chosenRecipe.image,
        // ingredients: this.state.chosenRecipe.ingredients,
        // directions: this.state.chosenRecipe.directions
      }
    });
    this.getMealRecipe(recipe)
  };

  getSelectedCuisine = (cuisine) => {
    this.setState({
      ...this.state,
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
          ...this.state,
          mealsArr: receivedMeals.data,
        })
        console.log(receivedMeals.data);
      } catch (error) {
        console.log('Oops')
      }
  }

  getMealRecipe = async (recipe) => {
    try {
      let recipeId = recipe.id;
      let url = `${process.env.REACT_APP_SERVER}/recipelist?recipeId=${recipeId}`;
      let receivedRecipeObj = await axios.get(url);
      this.setState({
        ...this.state,
        recipeToDisplay: receivedRecipeObj.data,
        showModal: true,
      })
      console.log(receivedRecipeObj.data);
    } catch (error) {
      console.log('Oops')
    }
  }

  render() {

    // console.log(this.state.selectedCuisine);
    // console.log(this.state.receivedMeals);
    console.log(this.state.showModal);
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
                      handleOnShowModal={this.handleOnShowModal}
                      mealsArr={this.state.mealsArr}
                      // handleHide={this.handleOnHideModal}
                    />
                  </div>
                )
              })}
            </div>
          </>}
        </section>
        <Faq />
        <Modal show={this.state.showModal} onHide={this.handleOnHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.recipeToDisplay.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={this.state.recipeToDisplay.image} alt={this.state.recipeToDisplay.title}/>
              <div>{this.state.recipeToDisplay.ingredients}</div>
              <div>{this.state.recipeToDisplay.instructions}</div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Home;
