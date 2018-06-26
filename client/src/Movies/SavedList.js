import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  // SavedList is not a Route -> didn't inherit Route's props
  // goHome = () => {
  //   this.props.history.push('/');
  // }
  render() {
    console.log('history: ', this.props)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></Link>
        ))}
        <div className="home-button"><Link to='/'>Home</Link></div>
      </div>
    );
  }
}
