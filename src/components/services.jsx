import React, { Component } from 'react'
import ResponsiveWeb from './responsiveWeb'
import responsiveImage from  "../images/row_1.png"

class Services extends Component {
    state = {  }
    render() { 
        return ( <div className="services-main-container">
            <ResponsiveWeb />
            <div className="responsive-image-wrapper">
                <img src={responsiveImage} alt="" srcset=""/>
            </div>

            <div className="services-main-content">
                <div className="header">
                    <h1>Our services</h1>
                </div>
                <div className="services-items">
                    
                </div>
            </div>
        </div> );
    }
}
 
export default Services;