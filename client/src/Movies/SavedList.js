import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((title, index) => (
          <Link key={index} to={`/movies/${index}`}>
            <span className="saved-movie" key={index}>
              {title}
            </span>
          </Link>
        ))}
        <Link to={`/`}>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
