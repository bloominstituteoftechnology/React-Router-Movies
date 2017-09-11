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
		img: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		img: "https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		img: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
	},
];

app.get('/movies', (req, res) => {
	res.send(movies);
});

app.get('/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.send(movie);
});

app.post('/new-movie', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.send(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
