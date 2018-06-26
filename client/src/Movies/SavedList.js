import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active">
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <div className="home-button"><StyledLink to="/">Home</StyledLink></div>
      </div>
    );
  }
}
