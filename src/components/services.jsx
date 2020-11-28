import React, { Component } from 'react'
import ResponsiveWeb from './responsiveWeb'
import responsiveImage from  "../images/row_1.png"

class Services extends Component {
    state = {  }
    render() { 
        const mystyle= {
            fontSize: "60px"
        }
        const monstyle= {
            fontSize: "35px"
        }
        const mstyle= {
            fontSize: "50px"
        };
        return ( <div className="services-main-container">
            <ResponsiveWeb />
            <div className="responsive-image-wrapper">
                <img src={responsiveImage} alt="" srcset=""/>
            </div>
            <div className="services-main-content">
                <div className="header">
                    <h1>Our services</h1>
                <div className="container-fluid text-center">
                <h2 className="chap"> " We Build Expectations and Impactful solutions " </h2>
                <div class="row"> 
                    <article className="col-md-4 col-lg-4 col-xs-12 col-sm-12 ">
                      <h3> Responsive Design </h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={monstyle} viewBox="0 0 36 36">
                        <path d="M30 2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM19 32h-2v-2h2zM6 28V4h24v24z" className="clr-i-solid clr-i-solid-path-1" fill="#b30000"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
                    </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={mystyle} viewBox="0 0 36 36"><path className="clr-i-solid clr-i-solid-path-1" d="M32 13h-8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2zm0 2v13h-8V15z" fill="#b30000"/>
                        <path class="clr-i-solid clr-i-solid-path-2" d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v2H9.32A1.2 1.2 0 0 0 8 27a1.2 1.2 0 0 0 1.32 1h10.6v-.37H20V22H4V6h24v5h2V6a2 2 0 0 0-2-2z" fill="#b30000"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
                    </svg>
                   
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic incidunt veniam numquam, voluptatibus, deserunt accusantium.</p>
                    </article>  
                    <article className="col-md-4 col-lg-4 col-xs-12 col-sm-12 ">
                      <h3> Web Development & Web Design </h3>
                    <svg width="1em" height="1em" style={mstyle} viewBox="0 0 16 16" className="bi bi-code-slash" fill="#b30000" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" style={mystyle} viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="#b30000"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg> 
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at Tempore aspernatur voluptate in modi earum commodi!</p>
                    </article>
                    <article class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <h3> Internet of Things (IoT) </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={mystyle} preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                            <path d="M26.54 20.82a.88.88 0 0 0-.88-.88h-4.91l1.1-1.1a.88.88 0 0 0-1.25-1.24l-3.21 3.22L20.6 24a.88.88 0 1 0 1.25-1.24l-1.09-1.06h4.9a.88.88 0 0 0 .88-.88z" className="clr-i-outline clr-i-outline-path-1" fill="#b30000"/><path d="M29.27 21.7a.88.88 0 1 0 0-1.76h-.58a.88.88 0 1 0 0 1.76z" className="clr-i-outline clr-i-outline-path-2" fill="#b30000"/><path d="M32.21 20h-.06a.85.85 0 0 0-.85.88a.91.91 0 0 0 .91.88a.88.88 0 1 0 0-1.76z" class="clr-i-outline clr-i-outline-path-3" fill="#b30000"/>
                            <path d="M32.59 11a.88.88 0 0 0-1.25 1.24l1.1 1.1h-4.91a.88.88 0 1 0 0 1.76h4.9l-1.09 1.09a.88.88 0 0 0 1.25 1.24l3.21-3.22z" className="clr-i-outline clr-i-outline-path-4" fill="#b30000"/>
                            <path d="M24.5 15.07a.88.88 0 1 0 0-1.76h-.58a.88.88 0 1 0 0 1.76z" className="clr-i-outline clr-i-outline-path-5" fill="#b30000"/><path d="M21.9 14.27a.85.85 0 0 0-.85-.88H21a.88.88 0 1 0 0 1.76a.91.91 0 0 0 .9-.88z" className="clr-i-outline clr-i-outline-path-6" fill="#b30000"/><path d="M30.36 23.65v.39a3.77 3.77 0 0 1-3.62 3.89H7.28a5.32 5.32 0 0 1-5.13-5.48A5.32 5.32 0 0 1 7.28 17h1.63l.09-.88a8.92 8.92 0 0 1 8.62-8h.08a8.49 8.49 0 0 1 6.56 3.29h2.37a10.55 10.55 0 0 0-8.91-5.25h-.11A10.82 10.82 0 0 0 7.22 15a7.28 7.28 0 0 0-7 7.43a7.27 7.27 0 0 0 7.08 7.43h19.47A5.72 5.72 0 0 0 32.35 24a3.77 3.77 0 0 0 0-.39z" class="clr-i-outline clr-i-outline-path-7" fill="#b30000"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
                        </svg>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora numquam nisi ciendis at sed voluptas blanditiis ut officiis.</p>
               </article>
               <article class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                   <h3> Graphic Design </h3>
                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={mystyle} viewBox="0 0 36 36">
                    <path className="clr-i-outline clr-i-outline-path-1" d="M18 20.25a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 0-1.81l15-7.09a1 1 0 0 1 .85 0l15 7.09a1 1 0 0 1 0 1.81l-15 7.09a1 1 0 0 1-.42.1zM5.34 12.16l12.66 6l12.66-6L18 6.18z" fill="#b30000"/><path className="clr-i-outline clr-i-outline-path-2" d="M18 26.16a1 1 0 0 1-.43-.1L2.57 19a1 1 0 1 1 .85-1.81L18 24.06l14.57-6.89a1 1 0 1 1 .86 1.83l-15 7.09a1 1 0 0 1-.43.07z" fill="#b30000"/>
                    <path className="clr-i-outline clr-i-outline-path-3" d="M18 32.07a1 1 0 0 1-.43-.1l-15-7.09a1 1 0 0 1 .85-1.81L18 30l14.57-6.89a1 1 0 1 1 .85 1.81L18.43 32a1 1 0 0 1-.43.07z" fill="#b30000"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
                </svg>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia placeat quisquam illo numquam facere explicabotia possimus magni?</p>
               </article>
               <article className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                   <h3>Digital Marketing</h3>
                   <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" style={mystyle} viewBox="0 0 32 32">
                    <path d="M11.5 6A3.514 3.514 0 0 0 8 9.5c0 1.922 1.578 3.5 3.5 3.5S15 11.422 15 9.5S13.422 6 11.5 6zm9 0A3.514 3.514 0 0 0 17 9.5c0 1.922 1.578 3.5 3.5 3.5S24 11.422 24 9.5S22.422 6 20.5 6zm-9 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5zm9 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5zM7 12c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0 0 2 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 0 0-2.219-4.156C10.523 18.117 11 17.114 11 16c0-2.2-1.8-4-4-4zm5 11c-.625.836-1 1.887-1 3h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.024 5.024 0 0 0-1-3c-.34-.453-.75-.84-1.219-1.156C19.523 21.117 20 20.114 20 19c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.042 5.042 0 0 0 12 23zm8 0h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.036 5.036 0 0 0-2.219-4.156C28.523 18.117 29 17.114 29 16c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.036 5.036 0 0 0 20 23zM7 14c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm18 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm-9 3c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2z" fill="#b30000"/><rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
                </svg>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quis quia? Blanditiis, laboriosam nostrum voluptates mollitia perferendis!</p>  
               </article>
               <article className="col-md-4 col-lg-4 col-xs-12 col-sm-12" >
                   <h3>Mobile Application</h3>
                   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={mystyle} viewBox="0 0 36 36">
                    <path d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-6 26h-2v-2h2zm-8-4V6h14v20z" class="clr-i-solid clr-i-solid-path-1" fill="#b30000"/><rect x="0" y="0" width="36" height="36" fill="rgba(0, 0, 0, 0)" />
                </svg>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiatempora dolorem ut accusamus repellendus deleniti consequuntur,</p>
               </article>
               <button type="submit" id="explore">EXPLORE MORE</button>
               </div>
            </div>   
                </div>
                <div className="services-items">
                </div>
            </div>
        </div> );
    }
}
 
export default Services;