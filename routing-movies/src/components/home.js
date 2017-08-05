import React, { Component } from 'react';

class home extends Component {
  render() {
    return (
      <div className='container '>
        <div className='jumbotron text-center'>
          <h1 className='display-1'>Welcome</h1>
          <hr className='home-hr' />
          <p className='lead'> Click on <span>movies</span> to see a list of movies</p>


        </div>
      </div>
    )
  }
}

export default home;
