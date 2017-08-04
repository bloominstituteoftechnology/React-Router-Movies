import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   // const id = this.props.match.params.id;
  //   // this.state = {
  //   //   movieInfo: this.props.movieInfo[id]
  //   // };
  // }
  render() {
    return (
    <div>
      {
        this.props.movieInfo.filter((movie, index) => {
          console.log(movie);
           return (index === this.props.match.params.id);
        }).map((object) => {
          return (
            <div>
              <h1>{`${object.title}`}</h1>
              <p>{`director: ${object.director}`}</p>
              <p>{`metascore: ${object.metascore}`}</p>
              <p>{`stars: ${object.stars}`}</p>
            </div>
          )
        })
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieInfo: state.movies
  }
}
export default connect(mapStateToProps)(ViewDetails)