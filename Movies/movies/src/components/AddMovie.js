import React, { Component } from 'react';
import { addMovie } from '../actions';
import { connect } from 'react-redux';
import '../App.css';

class AddMovie extends Component {

  render() {
    return(
      <div>
        <form>
          <input value={this.state.} onChange={this.update} placeholder="Title"/>
          <input value={this.state.} onChange={this.update} placeholder="Year"/>
          <input value={this.state.} onChange={this.update} placeholder="Director"/>
          <input value={this.state.} onChange={this.update} placeholder="Starring"/>
          <input value={this.state.} onChange={this.update} placeholder="Description"/>
          <input value={this.state.} onChange={this.update} placeholder="Rating"/>
          <button onClick={this.addMovie}>Add</button>
        </form>
      </div>
    )
  }
}
export default AddMovie;
