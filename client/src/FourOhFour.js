import React from 'react';
import { Link } from 'react-router-dom';

const FourOhFour = props => {
    return(
        <div>
            <h1>Oh no! You have found a page that does not exist.</h1>
            <p>Please click <Link to="/">here</Link> to be taken back to the homepage...</p>
        </div>
    )
}

export default FourOhFour;