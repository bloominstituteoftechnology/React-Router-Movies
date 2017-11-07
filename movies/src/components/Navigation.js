import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <div> 
            <h1> Movies List Website </h1> 
            <div>
                <NavItem>
                    <NavLink activeClassName = 'nav-link--active' to = "/" exact> Home </NavLink> 
                </NavItem>

            </div>
        </div>
    );
}

export default Navigation;