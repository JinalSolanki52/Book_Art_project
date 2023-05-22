import React from "react";
import './NavbarStyle.css';

const Navbar = (props) => {
    return (
        <>
          <h3>Welcome</h3> 
          <button onClick={props.fun}>Click me</button>
        </>
    );
};


//both props in one line at App.js we can write it as separate also 

export default Navbar;
//higher order, lower order component
