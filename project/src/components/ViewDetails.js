import React, { Component } from 'react';

class ViewDetails extends Component {
  render() {
    return (
    <div>
    <p>{`director: ${this.props.titulo.director}`}</p>
    <p>{`metascore: ${this.props.titulo.metascore}`}</p>
    <p>{`stars: ${this.props.titulo.stars}`}</p>
    </div>
    )
  }
}

export default ViewDetails;