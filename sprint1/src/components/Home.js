import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>Welcome Home
            <h3>See a list of movies</h3>
            <Link to = '/movies'>See Movies</Link>
        </div>

    );
}

export default Home;