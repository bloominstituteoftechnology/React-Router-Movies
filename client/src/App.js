import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <MovieList />
        <div><Route exact path="/" component={MovieList} /></div>
        <div><Route path="/movies/:id" component={Movie} /></div>

      </div>
    );
  }
}


// const Navigation = () => {
//   return (
//     <div>
//       <Nav className="App">
//         <h1>React Router Mini</h1>
//         <NavItem>
//           <Link to="/">Home</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/about">About</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/contact">Contact</Link>
//         </NavItem>
//       </Nav>
//     </div>
//   );
// };

// export default Navigation;
