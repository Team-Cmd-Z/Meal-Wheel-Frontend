import React from 'react';
import UpdateRecipeForm from './UpdateRecipeForm';
import { Button } from 'react-bootstrap';

class UpdateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealUpdateRecipeForm: false
    };
  }

  buttonClick = () => {
    this.setState({revealUpdateRecipeForm: true});
  }

  formSubmit = () => {
    this.setState({revealUpdateRecipeForm: false});
  }

  render() {
    return (
      <>
        <UpdateRecipeForm
          show={this.state.revealUpdateRecipeForm}
          handleClose={this.formSubmit}
          getSavedRecipes = {this.props.getSavedRecipes}
          updateRecipe = {this.props.updateRecipe}
          obj={this.props.obj}
      />
        <Button onClick={this.buttonClick} type="submit" variant="primary">Add notes</Button>
      </>
    );
  }
}

export default UpdateRecipe;
