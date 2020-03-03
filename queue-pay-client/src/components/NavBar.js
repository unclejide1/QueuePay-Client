import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavDiv} from './styled-components'


const NavBar = () => {
    return (
        <NavDiv>
        <NavLink exact to="/" ><h3>QueuePay</h3></NavLink>
        <ul className ="services">
        <NavLink exact to="/" className= "main-nav" activeClassName="selected"><li >Home</li></NavLink>
        <NavLink exact to="/about" className= "main-nav" activeClassName="selected"><li>About us</li></NavLink>
        <NavLink exact to = "/contact" className= "main-nav" activeClassName="selected"><li>Contact Us</li></NavLink>
        <NavLink exact to = "/services" className= "main-nav" activeClassName="selected"><li>Services</li></NavLink>
        </ul>
        <ul className = "user">
        <NavLink exact to = "/signin" className= "main-nav" activeClassName="selected"><li>Sign In</li></NavLink>
        <NavLink exact to = "/signup" className= "main-nav" activeClassName="selected"><li><button className="register">Create An Account</button></li></NavLink>
        </ul>
        </NavDiv>
    );
};

export default NavBar;