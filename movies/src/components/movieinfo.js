import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Link,
Route } from 'react-router-dom';

export default class Movies extends Component {
  constructor(props) {
    super();
  }

render () {
  return (
    <div> 
      <ul>
      <Router path="/movies:name" component={movies}
  )
}
}