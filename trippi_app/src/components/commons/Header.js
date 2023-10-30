import React from "react";

const Header = () => {
    return(
        <div className= "navbar is-primary">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <img src="components/commons/images/Logo.png" alt="" ></img>
                    <h1>Header</h1>
                </a>
            </div>
        </div>
    );
} 

export default Header;