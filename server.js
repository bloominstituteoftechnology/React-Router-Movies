const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');
const { urlencoded } = require('body-parser');

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
		imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQNzV4q9PCIsJOoZ9jpPPnUCj7ztQDpKPj9A&usqp=CAU',
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
		imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTro4o1KVhQqBJUDdYgD-5D4zDT0q0DLLpxDw&usqp=CAU',
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
		imgURL: 'https://lh3.googleusercontent.com/aw_D73BxPhvF4kBD1W0NSeQ-lkDAkUmH7Ljl12BNUIRqmh6Bo-73P7ZXeTsMb2ZFSBEF=w400-h600-rw',
	},
	{
		id: 3,
		title: 'Terminator 2: Judgement Day',
		director: 'James Cameron',
		metascore: 94,
		stars: ['Arnold Schwarzenegger', 'Edward Furlong', 'Linda Hamilton'],
		imgURL: 'https://contestimg.wish.com/api/webimage/5519724c4d613a0ce9c4f4bc-large.jpg?cache_buster=03c8932328964a836db69ca3c477ca3b',
	},
	{
		id: 4,
		title: 'Dumb and Dumber',
		director: 'The Farely Brothers',
		metascore: 76,
		stars: ['Jim Carrey', 'Jeff Daniels', 'Lauren Holly'],
		imgURL: 'https://i.ebayimg.com/images/g/tYwAAOSwTA9X7Lbj/s-l640.jpg',
	},
	{
		id: 5,
		title: 'Tombstone',
		director: 'George P. Cosmatos',
		metascore: 89,
		stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],
		imgURL: 'https://cdn.shopify.com/s/files/1/1878/3879/products/N4526_1000x.jpg?v=1556167644',
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
