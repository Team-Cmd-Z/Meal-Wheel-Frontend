import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class RecipeCard extends React.Component{
  render(){
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={this.props.obj.image} />
          <Card.Body>
            <Card.Title>{this.props.obj.title}</Card.Title>
            <Button onClick={() => this.props.handleOnShowModal(this.props.obj)}>See Recipe</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default RecipeCard;
