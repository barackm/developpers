import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

class SideNav extends Component {
    state = {  }
    componentDidMount() {
       
    }
    
    render() { 
        const {sideNavOpened}= this.props
        return ( <div className={sideNavOpened ? "sidenav-main-container open" : "sidenav-main-container"}>
            <div className="side-bar-header">
                <h1>About</h1>
                <p> <strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore.</strong></p>
                <p className="details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, reiciendis!</p>

                <div className="learn-more-btn">
                    Learn more
                </div>
            </div>
            <div className="side-nav-navigation">
                <div className="header">
                    <h1>
                        Navigation
                    </h1>
                </div>
                <div className="links-list">
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                        </div>
                        <h3>Home</h3>
                    </div>
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                        </div>
                        <h3>services</h3>
                    </div>
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                        </div>
                        <h3>Competence</h3>
                    </div>
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                        </div>
                        <h3>Portfolio</h3>
                    </div>
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaChevronRight />
                        </IconContext.Provider>
                        </div>
                        <h3>Contact</h3>
                    </div>
                </div>
            </div>
            <div className="side-nav-navigation">
                <div className="header">
                    <h1>
                        Contact
                    </h1>
                </div>
                <div className="links-list">
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaMapMarkerAlt />
                        </IconContext.Provider>
                        </div>
                        <h3>Kigali, 220 Gisozi</h3>
                    </div>
                    <div className="link-item">
                        <div className="icon-wrapper">
                        <IconContext.Provider value={{className: "side-nav-icon"}}>
                            <FaPhoneAlt />
                        </IconContext.Provider>
                        </div>
                        <h3>+(250) 780 083 122</h3>
                    </div>
                    
                    
                   
                </div>
            </div>
        </div> );
    }
}
 
export default SideNav;