import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// let SERVER = process.env.REACT_APP_SERVER;

// Component code credit: https://react-bootstrap.github.io/components/modal/
class UpdateRecipeForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let newNotes = this.props.obj.notes;
    if (e.target.notes.value !== '') {
      newNotes = e.target.notes.value;
    }
    let newRecipe = {
      title: this.props.obj.title,
      instructions: this.props.obj.instructions,
      notes: newNotes,
      imageUrl: this.props.obj.imageUrl,
      _id: this.props.obj._id,
      __v: this.props.obj.__v
    };
    this.props.updateRecipe(newRecipe);
    this.props.getSavedRecipes();
    console.log(newRecipe)
  }





  render() {
    return (<>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Form onSubmit={(e) => {
              this.onSubmit(e);
              this.props.handleClose();
            }}>
          <Modal.Header closeButton>
            <Modal.Title>Add Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='What did you think of this recipe?'
                  autoFocus
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>);
  }
}



export default UpdateRecipeForm;
