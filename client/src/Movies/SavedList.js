import React, { Component } from 'react';
//import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';


class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
      
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">
          <Link to= {`/movie/${movie.id}`}>{movie.title}</Link></span>
          
        ))}
        <Link to="/movie"><div className="home-button">Home</div></Link>
      </div>
    );
  }
}

// const StyledLink = styled(NavLink)`
// &.active{
//   color:red;
// }
// `

export default SavedList