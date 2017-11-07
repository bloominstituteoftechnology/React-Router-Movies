
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Home extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
        return(
            <ul>
                {this.props.movies.map((movie) => {
                    return(
                    <li> 
                        <NavItem>
                            <NavLink activeClassName = 'nav-link--active' to = "/movielist"> {movie.title} </NavLink> 
                        </NavItem>
                    </li>
                    );
                })}
            </ul>
        );
        
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
}

export default connect(mapStateToProps, { getMovies })(Home);