import React, { Component } from 'react';

class ViewMovie extends Component {
  render() {
    return (
    <div>
    <p>Tai was here. {`title ${this.props.movieInfo.title}`}</p>
    </div>
    )
  }
}

export default ViewMovie;