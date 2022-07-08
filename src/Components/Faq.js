import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';

class Faq extends React.Component {
  render() {
    return (
      <div className="faq-parent">
        <div className="div1">
          <h1>FAQs</h1>
        </div>
        <div className="div2">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I refer back to recipes that I want to try later?</Accordion.Header>
              <Accordion.Body>
                When you click on the 'See Recipe' button on each recipe card, you will find the ingredients and instructions for that recipe, and below that, you'll find a little heart that you can click to 'favorite' that recipe. Once favorited, head over to the 'Save Recipes' page but clicking the link at the top of this window. There you will find all your favorited recipes!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What if I don't like a recipe, how will I remember to not cook it again?</Accordion.Header>
              <Accordion.Body>
                On the 'Save Recipes' page, you will be able to see all the recipes you favorited, if you aboslutely hate the recipe, you can click the 'delete' button to erase it from your saved recipes, or you can click the 'Add Notes' button and you can write peronalized notes for future use!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How can I filter the available recipes so that they only show vegetarian options?</Accordion.Header>
              <Accordion.Body>
                The Meal Wheel is a brand new technology and still has a lot of room for growth! We hope to grow the potential of the wheel one day by adding filters so that the user can weed out recipes that don't coorelate with their dietary needs! Keep an eye out for those updates, coming soon!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>This app is awesome! Who can I thank for this helpful app?!</Accordion.Header>
              <Accordion.Body>
                Head over to the 'About Us' page linked at the top of this window to learn about our four wonderful software developers!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    )
  }
}

export default Faq;
