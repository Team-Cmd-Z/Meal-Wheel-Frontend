import React from 'react';
import RecipeCard from './RecipeCard';
import data from '../data.json';
import axios from 'axios';


class SavedRecipes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getSavedRecipes();
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
              console.log(recipe);
              return (
                <div className={`div${i + 1}`}>
                  <RecipeCard
                    obj={recipe}
                    saved={true}
                    onDelete={this.handleDelete}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </>
    )
  }
}

export default SavedRecipes;