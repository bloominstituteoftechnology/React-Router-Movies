import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, getMovie } from '../actions';
import { bindActionCreators } from 'redux';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  componentDidMount() {
        this.props.getMovies();
  }
  render() {
    return (
      <div>
        <Nav className="App">
          <h1>MOVIES</h1>
          {this.props.movies.map((movie, i) => {
            return (<NavItem key={i}>
                      <NavLink activeClassName="nav-link--active"
                               to={"/movies/" + movie.id}
                               onClick={()=>{this.props.getMovie(movie.id)}}
                               >{movie.title}
                      </NavLink>
                    </NavItem>);
          })}
          <NavItem >
            <NavLink activeClassName="nav-link--active" to={"/add"}> Add Movie </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMovies, getMovie }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
