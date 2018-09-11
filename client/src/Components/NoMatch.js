import React, { Component } from 'react';

 const NoMatch = () =>
  <div className='movie-card' style={{display:'flex',  alignItems:'center', flexDirection: 'column'}}>
    <h1>Oh Noes! You're lost!</h1>
    <p>Click on the Home button to go back</p>
    <img src='https://ubisafe.org/images/galleries-clipart-movie-reel-2.jpg' />
  </div>

export default NoMatch
