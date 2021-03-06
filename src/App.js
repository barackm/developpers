import React from "react";

import About from "./components/about";
import ColorPalet from "./components/colorPalet"
import Header from "./components/header"
import Home from "./components/home";
import SideNav from "./components/sideNav";

import "./css/header.css"
import "./css/home.css";
import "./css/sidenav.css";
import "./css/about.css";
import "./css/responsiveWeb.css";
import "./css/services.css"

import Services from "./components/services";

class App extends React.Component {
 
  state={
    sideBarOpened: false
  }
  handleToggleSideBar=()=>{
    this.setState({sideBarOpened: ! this.state.sideBarOpened})
  }
  handleCloseSideBar=()=>{
    this.setState({sideBarOpened: false})
  }

    render() {
    const {sideBarOpened}= this.state
    return (
      <React.Fragment>
        <Header sideNavOpened={sideBarOpened} onToggleSideNav={this.handleToggleSideBar} onCloseSideNav={this.handleCloseSideBar}/>
        <Home />
        <ColorPalet />
        <SideNav sideNavOpened={sideBarOpened}/>
        <About />
        <Services />
      </React.Fragment>
    );
  }
}

export default App;
