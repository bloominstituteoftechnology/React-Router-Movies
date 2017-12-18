import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Link,
Route } from 'react-router-dom';

export default class Movies extends Component {
  constructor() {
    super();
  }


render () {
  return (
    <div> 
      <Router path="/movies:name" component={movies}
  )
}
}