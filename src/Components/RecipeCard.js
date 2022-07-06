import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiCaretDown } from 'react-icons/bi';

class RecipeCard extends React.Component{
  render(){
    // console.log(this.props.obj);
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={this.props.obj.image} />
          <Card.Body>
            <Card.Title>{this.props.obj.title}</Card.Title>
            <Card.Link href='#'>See Recipe <BiCaretDown /></Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default RecipeCard;