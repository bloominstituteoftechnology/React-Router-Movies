import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="saved-list">
          <h3>Saved Movies:</h3>
          {this.props.list.map((movie, i) => (
            <Fragment key={i}>
              <Link to={`/movies/${movie.id}`} key={i}>
                <span className="saved-movie">{movie.title}</span>
              </Link>
              <div onClick={() => this.props.remove(movie)}>
              x
              </div>
            </Fragment>
          ))}
        

          <div className="home-button">
            <button onClick={this.props.clear}>Clear List</button>
            <br/>
            <Link to='/'>
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
