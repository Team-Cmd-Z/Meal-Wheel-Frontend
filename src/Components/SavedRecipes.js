import React from 'react';
import RecipeCard from './RecipeCard';
import data from '../data.json';


class SavedRecipes extends React.Component {
  render() {
    let filteredRecipes = data;
    console.log(filteredRecipes);
    return (
      <>
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
      </>
    )
  }
}

export default SavedRecipes;