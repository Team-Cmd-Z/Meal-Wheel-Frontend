import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class RecipeCard extends React.Component{
  render(){
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={this.props.obj.image || this.props.obj.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.obj.title}</Card.Title>
            <Button onClick={() => this.props.handleOnShowModal(this.props.obj)}>See Recipe</Button>
            {this.props.saved ? <Button onClick={() => this.props.onDelete(this.props.obj._id)} variant='danger'>Delete</Button> : ''}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default RecipeCard;
