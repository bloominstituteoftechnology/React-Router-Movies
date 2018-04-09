import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <Link to='/movielist'>MovieList</Link>
        </div>
    )
}

export default Navigation;