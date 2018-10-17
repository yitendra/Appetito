import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div id="Navbar">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                        <a className="navbar-brand" href="/Home">Appetito</a>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">                    
                    <ul className="nav navbar-nav navbar-right">
                        <li className=""><a href="/Home">Home</a></li> {/*class=active*/}
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/">Sign Up</Link></li>
                        <li><NavLink to="/ContactUs">Contact us</NavLink></li>
                    </ul>
                    </div>

                </div>  
            </nav>
        </div>
    )
}

export default Navbar;