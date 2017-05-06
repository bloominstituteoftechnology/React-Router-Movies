import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return(
      <div>
        <form>
          <input placeholder="Title"/>
          <input placeholder="Year"/>
          <input placeholder="Director"/>
          <input placeholder="Starring"/>
          <input placeholder="Description"/>
          <input placeholder="Rating"/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default AddMovie;
