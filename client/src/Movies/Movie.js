import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

export default class MovieCard extends React.Component {
  state = {
    movie: null
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.movieId;
    console.log("Props", this.props.match.params.movieId);
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
    const backgroundColor = "pink";
    console.log(this.props.style);
    return (
      <Container className="movie-card">
        <Row>
          <Col sm={6}>
            <div>
              <h2 className="title">{title}</h2>
              <div className="movie-director">
                Director: <em>{director}</em>
              </div>
              <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
              </div>
              <h3 className="title">Actors</h3>

              {stars.map(star => (
                <div key={star} className="movie-star">
                  {star}
                </div>
              ))}
            </div>
          </Col>
          <Col sm={6}>
            <img
              className="movie-poster img-fluid img-thumbnail mx-auto"
              src={images[`${this.props.match.params.movieId}.jpg`]}
            />
          </Col>
        </Row>
        <Link to="/" className="home-button">
          Home
        </Link>
      </Container>
    );
  }
}
