import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";

export default class MovieCard extends React.Component {
  state = {
    movie: null
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div>
        <Card>
          <CardBody>
            <Button color="info">
              <Link to="/">
                <h4 class="home">Home</h4>
              </Link>
            </Button>
            <CardTitle>
              <h2>{title}</h2>
            </CardTitle>
            <CardText>
              <div className="movie-director">
                Director: <em>{director}</em>
              </div>
            </CardText>
            <CardText>
              {" "}
              <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
              </div>
            </CardText>
            <CardText>
              {" "}
              <h3>Actors</h3>
            </CardText>
            <CardText>
              {" "}
              {stars.map(star => (
                <div key={star} className="movie-star">
                  {star}
                </div>
              ))}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
