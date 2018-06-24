import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #000;
  }
`

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <StyledLink key={movie.id} to={`/movies/${movie.id}`}>
            <span className='saved-movie'>{movie.title}</span>
          </StyledLink>
        ))}
        <Link to='/' className="home-button">Home</Link>
      </div>
    );
  }
}
