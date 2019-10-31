const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
		image: 'http://www.gstatic.com/tv/thumb/v22vodart/6326/p6326_v_v8_aj.jpg'
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		image: 'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg'
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		image: 'http://www.gstatic.com/tv/thumb/v22vodart/28828/p28828_v_v8_bg.jpg'

	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		metascore: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
		image: 'http://www.gstatic.com/tv/thumb/v22vodart/13308/p13308_v_v8_al.jpg'

	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		metascore: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
		image: 'http://www.gstatic.com/tv/thumb/v22vodart/16298/p16298_v_v8_aa.jpg'
	},
	{
		id: 5,
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		metascore: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
		image: 'http://www.gstatic.com/tv/thumb/v22vodart/15292/p15292_v_v8_ap.jpg'
	},
];

app.get('/api/movies', (req, res) => {
	res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.status(201).json(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
