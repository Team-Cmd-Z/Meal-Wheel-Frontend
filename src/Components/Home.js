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
      chosenRecipe: [],
      showModal: false,
      modal: {}
    }
  }

  handleOnHideModal = () => {
    this.setState({
      showModal: false,
      // modal: {}
    });
  };

  handleOnShowModal = () => {
    this.setState({
      showModal: true,
      modal: {
        title: this.state.mealsArr[0].title,
        imageUrl: this.state.mealsArr[0].imageUrl,
      }
    });
    // this.setState({
    //   showModal: true,
    // });
  };

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

  // getMealRecipe = async (index) => {
  //   try {
  //     let recipeId = 643362;// get ID number from click event
  //     let url = `${process.env.REACT_APP_SERVER}/recipelist?recipeId=${recipeId}`;
  //     let receivedRecipe = await axios.get(url);
  //     this.setState({
  //       chosenRecipe: receivedRecipe.data,
  //     })
  //     console.log(receivedRecipe.data);
  //   } catch (error) {
  //     console.log('Oops')
  //   }
  // }

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
            <Modal.Title>{this.state.modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={this.state.modal.imageUrl} alt={this.state.modal.title}/>
              {/* <div>{this.state.modal.title}</div> */}
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Home;
