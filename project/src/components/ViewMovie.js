import React, { Component } from 'react';

class ViewMovie extends Component {
  render() {
    return (
    <div>
    <p>{`title ${this.props.titulo.title}`}</p>
    </div>
    )
  }
}

export default ViewMovie;