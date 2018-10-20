import React from 'react';
import { Route } from 'react-router-dom';

import NavLinks from './NavLinks';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                {this.props.NavLinks.map((item) => {
                    return(
                        <Route path="/" render={(props) => <NavLinks category={item.category} products={item.products} /> } />
                         )
                })}
            </div>
        )
    }
};

export default NavBar