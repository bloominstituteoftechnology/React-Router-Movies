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
    year: '2005',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 1,
    title: 'Touching The Void',
    year: '2001',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 2,
    title: 'Housebound',
    year: '2014',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 3,
    title: 'The Babadook',
    year: '2014',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 4,
    title: 'The Martian',
    year: '2015',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 5,
    title: 'Cabin In The Woods',
    year: '2012',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 6,
    title: 'The Descent',
    year: '2006',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 7,
    title: 'The Departed',
    year: '2012',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 8,
    title: 'The Fifth Element',
    year: '1996',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 9,
    title: 'Fargo',
    year: '1994',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 10,
    title: 'Deadpool',
    year: '2016',
    director: '',
		description: '',
    metascore: '',
    stars: [],
  },
  {
    id: 11,
    title: 'Logan',
    year: '2017',
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
