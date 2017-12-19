import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    state = {

    }

    render() {
        return (
            <div className='Nav'>
                <div className='Links__Container'>
                    <Link className='Nav__Link' to='/'>Home</Link>
                    <Link className='Nav__Link' to='/new-movie'>New Movie</Link>
                    <Link className='Nav__Link' to='/'>Placeholder</Link>
                    <Link className='Nav__Link' to='/'>Placeholder</Link>
                </div>
            </div>
        );
    }
}

export default Nav;