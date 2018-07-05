import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-decoration: none;
    background: linear-gradient(to top, orange, black);
    border 1px solid white;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`;

const MovieCard = props => {
  const movie = props.movie;
  const { title, director, metascore, stars } = movie;
  return (
        <StyledNavLink to={`/movies/${movie.id}`}
                  activeClassName="selected"
                  activeStyle={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                  }} >

          <StyledDiv className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
              Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
              Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>
    
            {stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </StyledDiv>
        </StyledNavLink>
    );
};

export default MovieCard;
