import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaCog } from "react-icons/fa";

class ColorPalet extends Component {
  state = {
    paletShown: false,
  };

  handleShowPalet = () => {
    this.setState({
      paletShown: !this.state.paletShown,
    });
  };
  render() {
    const { paletShown } = this.state;
    const {primaryColor} = this.props
    const colors = [
      {
        id: 1,
        color: "#e74c3c",
      },
      {
        id: 2,
        color: "#27ae60",
      },
      {
        id: 3,
        color: "#c0392b",
      },
      {
        id: 4,
        color: "#cea35f",
      },
      {
        id: 5,
        color: "#ad8368",
      },
      {
        id: 6,
        color: "#16a085",
      },
      {
        id: 7,
        color: "#f96015",
      },
      {
        id: 8,
        color: "#ffb546",
      },
      {
        id: 9,
        color: "#0091ea",
      },
      {
        id: 10,
        color: "#c7b29b",
      },
    ];
    return (
      <div
        className={
          paletShown
            ? "color-palet-main-container shown"
            : "color-palet-main-container"
        }
      >
        <div className="header"style={{color: primaryColor}}>
          <h1>Style switcher</h1>
        </div>
        <div className="colors-wrapper">
          <div className="header">
            <h1>coleur theme</h1>
          </div>
          <div className="colors">
              {colors.map(color => <div key={color.id} className="color-item" style={{backgroundColor: color.color}} onClick={()=> this.props.onChangeColor(color.color)}></div>)}
          </div>
        </div>
        <div className="cog-container" onClick={this.handleShowPalet}>
          <IconContext.Provider value={{ className: "icon-cog", color: primaryColor }}>
            <FaCog />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default ColorPalet;
