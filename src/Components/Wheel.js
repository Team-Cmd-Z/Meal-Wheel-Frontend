import React from 'react';
import './Wheel.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  };

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.cuisines.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      setTimeout(() => this.props.getSixMeals(selectedItem), 3700);
      this.props.updateCuisine(selectedItem)
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  };


  render() {
    const { selectedItem } = this.state;
    const { cuisines } = this.props;
    // console.log(this.state.selectedItem);
    const wheelVars = {
      '--nb-item': cuisines.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {cuisines.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
        <button onClick={this.selectItem}>SPIN</button>
      </div>
    );
  }
}
