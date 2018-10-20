import React from 'react';

class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                {this.props.category}
            </div>
        )
    }
};

export default NavLinks;