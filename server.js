const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
  {
    id: 0,
    img:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
    title: "The Godfather",
    director: "Francis Ford Coppola",
    metascore: 100,
    stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
  },
  {
    id: 1,
    img:
      "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480",
    title: "Star Wars",
    director: "George Lucas",
    metascore: 92,
    stars: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    metascore: 92,
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
    title: "Terminator 2: Judgement Day",
    director: "James Cameron",
    metascore: 94,
    stars: ["Arnold Schwarzenegger", "Edward Furlong", "Linda Hamilton"]
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
    title: "Dumb and Dumber",
    director: "The Farely Brothers",
    metascore: 76,
    stars: ["Jim Carrey", "Jeff Daniels", "Lauren Holly"]
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
    title: "Tombstone",
    director: "George P. Cosmatos",
    metascore: 89,
    stars: ["Kurt Russell", "Bill Paxton", "Sam Elliot"]
  }
];

app.get("/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.filter(
    movie => movie.id.toString() === req.params.id
  )[0];
  res.status(200).json(movie);
});

app.post("/api/movies", (req, res) => {
  if (req.body.id !== undefined) movies.push(req.body);
  res.status(201).json(movies);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
