import React from "react";
import Header from "./components/header"
import Home from "./components/home";
import ColorPalet from "./components/colorPalet"
import "./css/header.css"
import "./css/home.css"

class App extends React.Component {
 

  render() {
    
    return (
      <React.Fragment>
        <Header />
        <Home />
        <ColorPalet />
      </React.Fragment>
    );
  }
}

export default App;
