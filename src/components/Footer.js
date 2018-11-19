import React from 'react'

const Footer=()=>{
    return(
        <div id="Footer">
        <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="/">Appetito</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="/Home">Home</a></li>
                <li><a href="/About">Page 1</a></li>
                <li><a href="/">Page 2</a></li>
                <li><a href="/">Page 3</a></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Footer;