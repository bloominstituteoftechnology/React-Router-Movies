import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';


export default class SavedList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map( movie => {
          return(
            <NavLink to={`/movies/${movie.id}`} key={movie.id} activeClassName="saved-active" style={{paddingLeft: 13, textDecoration: 'none'}}>
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          )
        })}
        
        {/* Add functionality so the `Home` button on the `SavedList` component navigates back to home. */}
        <div className="home-button">
          <Link to="/"style={{paddingLeft: 13, textDecoration: 'none', color: 'black'}}>Home</Link>
        </div>
      </div>
    )
  }
}