import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Movie = (props) => {
  return(
    <div>
    </div>
  )
}

export default Movie 
// export default class Movie extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movie: []
//     };
//   }


 
  
//   saveMovie = () => {
//     const addToSavedList = this.props.addToSavedList;
//     addToSavedList(this.state.movie)
//   }

//   render(props) {
  

//     return (
//       <div className="save-wrapper">
//         <div className="movie-card">
//           <h2>{props.title}</h2>
//           <div className="movie-director">
//             Director: <em>{props.director}</em>
//           </div>
//           <div className="movie-metascore">
//             Metascore: <strong>{props.metascore}</strong>
//           </div>
//           <h3>Actors</h3>

//           {/* {stars.map(star => (
//             <div key={star} className="movie-star">
//               {star}
//             </div>
//           ))} */}
//         </div>
//         <div className="save-button">Save</div>
//       </div>
//     );
//   }
// }

