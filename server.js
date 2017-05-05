const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
  {
    id: 0,
    title: 'Happy People: A Year In The Taiga',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 1,
    title: 'Touching The Void',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 2,
    title: 'Housebound',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 3,
    title: 'The Babadook',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 4,
    title: 'The Martian',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 5,
    title: 'Cabin In The Woods',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 6,
    title: 'The Descent',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 7,
    title: 'The Departed',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 8,
    title: 'The Fifth Element',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 9,
    title: 'Fargo',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 10,
    title: 'Deadpool',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 11,
    title: 'Logan',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
];

app.get('/movies', (req, res) => {
	res.send(movies);
});

app.get('/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id === req.params.id)[0];
	res.send(movie);
});

app.post('/new-movie', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.send(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
