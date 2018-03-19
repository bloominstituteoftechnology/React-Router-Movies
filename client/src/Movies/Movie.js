import React from 'react';
import axios from 'axios';

export default class MovieCard extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }
    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    );
  }
}
{/*<Router>
  <div>
    <h2>Go Back</h2>
    <Route exact path="/" render={() => <div>Go Back</div>} />
  const FadingRoute = ({ component: Component, ...rest })
    <Route {...rest} render={props => (
      <FadeIn>
        <Component {...props}/>
      </FadeIn>
    )}/>
  )
  </div>
</Router>*/}

/*<Switch>
  <Route exact path='/' component={Index}/>
</Switch>*/