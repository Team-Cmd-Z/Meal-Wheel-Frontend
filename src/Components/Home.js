import React from 'react';
import RecipeCard from './RecipeCard';
import Faq from './Faq.js';
import Wheel from './Wheel.js';
import './Home.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineStar, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import {withAuth0} from '@auth0/auth0-react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
// import Profile from './Components/Profile';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCuisine: null,
      cuisines: ['American', 'Spanish', 'French', 'Italian', 'Jewish', 'Japanese', 'Mediterranean', 'Mexican', 'Indian', 'Thai', 'Caribbean', 'Chinese'],
      mealsArr: [],
      chosenRecipe: {},
      showModal: false,
      modal: {},
      recipeToDisplay: {},
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
      let cuisine = this.state.selectedCuisine;
      console.log(this.props.auth0.isAuthenticated);
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims()
        const jwt = res.__raw
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `./recipes?cuisine=${cuisine}`,
          headers: {"Authorization": `Bearer ${jwt}`}
        }
        console.log(config)
        let recievedMeals = await axios(config)
        console.log(recievedMeals)

        // let cuisine = this.state.cuisines[index];
        // let url = `${process.env.REACT_APP_SERVER}/recipes?cuisine=${cuisine}`;
        // let receivedMeals = await axios.get(url);
        this.setState({
        ...this.state,
        mealsArr: recievedMeals.data,
      })
    }
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

  handleAddToCollection = () => {
    //   title: { type: String, required: true },
    // imageUrl: { type: String, required: true },
    // ingredients: { type: Array, required: true },
    // directions: { type: String, required: true },
    // notes: { type: String, required: false }

    try {
      console.log(this.state.chosenRecipe);
      console.log(this.state.recipeToDisplay);
      let chosenObj = {
        title: this.state.chosenRecipe.title,
        imageUrl: this.state.chosenRecipe.image,
        ingredients: this.state.recipeToDisplay.ingredients,
        instructions: this.state.recipeToDisplay.instructions,
        notes: '',
      }
      let url = `${process.env.REACT_APP_SERVER}/recipes`;
      console.log(url);
      axios.post(url, chosenObj);
    } catch (error) {
      console.log(`Oh snap! ${error.message}`);
    }
  }

  render() {
    return (
      <div className='home-container'>
        <div id='home-splash'>
          <p>Don't know what to cook for dinner? Bored of the same old recipes? Let Meal-Wheel™ take those concerns off your plate!</p>
          <Wheel
            cuisines={this.state.cuisines}
            updateCuisine={this.getSelectedCuisine}
            getSixMeals={this.getSixMeals}
          />

        </div>
        {
          this.props.auth0.isAuthenticated?
            <>
            <section>
          {
            this.state.mealsArr.length ?
              <>
                <h1>Try one of these recipes</h1>
                <div className='parent'>
                  {this.state.mealsArr.map((recipe, i) => {
                    return (
                      <div key={i} className={`div${i + 1}`}>
                        <RecipeCard
                          obj={recipe}
                          saved={false}
                          handleOnShowModal={this.handleOnShowModal}
                          mealsArr={this.state.mealsArr}
                        // handleHide={this.handleOnHideModal}
                        />
                      </div>
                    )
                  })}
                </div>
              </>
              : <h1>Click SPIN to find recipes</h1>
          }
        </section>
            </>
          :<h2>Please Login to your account.</h2>
        }
        {
          this.props.auth0.isAuthenticated?<LogoutButton/>:<LoginButton/>
        }
        {/* <section>
          {
            this.state.mealsArr.length ?
            <>
              <h1>Try one of these recipes</h1>
              <div className='parent'>
                {this.state.mealsArr.map((recipe, i) => {
                  return (
                    <div key={i} className={`div${i + 1}`}>
                      <RecipeCard
                        obj={recipe}
                        saved={false}
                        handleOnShowModal={this.handleOnShowModal}
                        mealsArr={this.state.mealsArr}
                      // handleHide={this.handleOnHideModal}
                      />
                    </div>
                  )
                })}
              </div>
            </> 
            : <h1>Click SPIN to find recipes</h1>
            }
        </section> */}
        <Faq />
        <Modal show={this.state.showModal} onHide={this.handleOnHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.recipeToDisplay.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.recipeToDisplay.image}
              alt={this.state.recipeToDisplay.title}
            />
            <div>
              <ul className='ingredients'>
                {this.state.recipeToDisplay.ingredients &&
                  this.state.recipeToDisplay.ingredients.map((element, index) => (<li key={index}>{element}</li>))};
              </ul>
            </div>
            <div>{this.state.recipeToDisplay.instructions}</div>
            <ul className='modal-icons'>
              <li className='icon'
                onClick={this.handleAddToCollection}>
                <button><AiOutlineStar /></button>
              </li>
              <li className='icon'
                onClick={this.handleAddToCollection}>
                <button><AiOutlineHeart /></button>
              </li>
              <li className='icon'
                onClick={this.handleAddToCollection}>
                <button><AiOutlineShareAlt /></button>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default withAuth0(Home);
