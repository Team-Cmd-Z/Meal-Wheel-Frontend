import React from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';


class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalToShow: null,
    }
  }

  componentDidMount() {
    this.getSavedRecipes();
  }

  handleOnShowModal = (id) => {
    this.setState({
      ...this.state,
      modalToShow: id,
    })
  }

  handleOnHideModal = () => {
    this.setState({
      ...this.state,
      modalToShow: null,
    })
  }

  // get request to render data from database
  getSavedRecipes = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/recipes/collection`;
      console.log(url);
      let dbRecipes = await axios.get(url);
      this.setState({
        data: dbRecipes.data,
      })
    } catch (error) {
      console.log(`Oh snap! ${error.message}`);
    }
  }

  updateRecipe = async (recipeUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/recipes/${recipeUpdate._id}`;
      let updatedRecipe = await axios.put(url, recipeUpdate);
      let updatedRecipeArray = this.state.data.map(currentRecipe => {
        return currentRecipe._id === recipeUpdate._id
          ? updatedRecipe.data
          : currentRecipe
      });
      this.setState({
        data: updatedRecipeArray
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  handleDelete = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/recipes/${id}`;
      axios.delete(url);
      let newData = this.state.data.filter(obj => obj._id !== id);
      this.setState({
        data: newData,
      })
    } catch (error) {
      console.log(`Oh snap! ${error.message}`);
    }
  }

  render() {
    return (
      <>
        <section>
          <h1>Try one of these recipes</h1>
          <div className='parent'>
            {this.state.data.map((recipe, i) => {
              return (
                <div key={recipe._id}>
                  <div className={`div${i + 1}`}>
                    <RecipeCard
                      updateRecipe = {this.updateRecipe}
                      getSavedRecipes = {this.getSavedRecipes}
                      obj={recipe}
                      saved={true}
                      onDelete={this.handleDelete}
                      handleOnShowModal={() => this.handleOnShowModal(recipe._id)}
                    />
                  </div>
                  <Modal show={this.state.modalToShow === recipe._id} onHide={this.handleOnHideModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>{recipe.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={recipe.imageUrl} alt={recipe.title} />
                      <div>{recipe.ingredients}</div>
                      <div>{recipe.instructions}</div>
                    </Modal.Body>
                  </Modal>
                </div>
              );
            })}
          </div>
        </section>
      </>
    )
  }
}

export default SavedRecipes;
