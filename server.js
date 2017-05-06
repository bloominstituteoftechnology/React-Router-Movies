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
    year: '2010',
    genre: ['Documentary'],
    runtime: '1h 30min',
    rating: 'Not Rated',
    director: ['Werner Herzog', 'Dmitry Vasyukov'],
		description: 'A documentary depicting the life and work of the trappers of Bakhtia, a village in the heart of the Siberian Taiga, where daily life has changed little in over a century.',
    metascore: '74',
    stars: ['Werner Herzog', 'Nikolay Nikiforovitch Siniaev', 'Gennady Soloviev'],
    userrating: 'Not yet rated',
  },
  {
    id: 1,
    title: 'Touching The Void',
    year: '2003',
    genre: ['Documentary'],
    runtime: '1hr 46min',
    rating: 'R',
    director: ['Kevin Macdonald'],
		description: 'The true story of two climbers and their perilous journey up to the west face of Siula Grande in the Peruvian Andes in 1985.',
    metascore: '82',
    stars: ['Simon Yates', 'Joe Simpson', 'Brendan Mackey'],
    userrating: 'Not yet rated',
  },
  {
    id: 2,
    title: 'Housebound',
    year: '2014',
    genre: ['Comedy', 'Horror', 'Mystery'],
    runtime: '1h 47min',
    rating: 'Not Rated',
    director: ['Gerard Johnstone'],
		description: 'A young woman is forced to return to her childhood home after being placed under house arrest, where she suspects that something evil may be lurking.',
    metascore: '76',
    stars: ['Morgana O\'Reilly', 'Rima Te Wiata', 'Glen-Paul Waru'],
    userrating: 'Not yet rated',
  },
  {
    id: 3,
    title: 'The Babadook',
    year: '2014',
    genre: ['Drama', 'Horror'],
    runtime: '1hr 33min',
    rating: 'Not Rated',
    director: ['Jennifer Kent'],
		description: 'A single mother, plagued by the violent death of her husband, battles with her son\'s fear of a monster lurking in the house, but soon discovers a sinister presence all around her.',
    metascore: '86',
    stars: ['Essie Davis', 'Noah Wiseman', 'Daniel Henshall'],
    userrating: 'Not yet rated',
  },
  {
    id: 4,
    title: 'The Martian',
    year: '2015',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    runtime: '2h 24min',
    rating: 'PG-13',
    director: ['Ridley Scott'],
		description: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
    metascore: '80',
    stars: ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig'],
    userrating: 'Not yet rated',
  },
  {
    id: 5,
    title: 'Cabin In The Woods',
    year: '2012',
    genre: ['Horror'],
    runtime: '1h 35min',
    rating: 'R',
    director: ['Drew Goddard'],
		description: 'Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.',
    metascore: '72',
    stars: ['Kristen Connolly', 'Chris Hemsworth', 'Anna Hutchinson'],
    userrating: 'Not yet rated',
  },
  {
    id: 6,
    title: 'The Descent',
    year: '2005',
    genre: ['Adventure', 'Horror', 'Thriller'],
    runtime: '1h 39min',
    rating: 'R',
    director: ['Niel Marshall'],
		description: 'A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.',
    metascore: '71',
    stars: ['Shauna Macdonald', 'Natalie Mendoza', 'Alex Reid'],
    userrating: 'Not yet rated',
  },
  {
    id: 7,
    title: 'The Departed',
    year: '2006',
    genre: ['Crime', 'Drama', 'Thriller'],
    runtime: '2h 31min',
    rating: 'R',
    director: ['Martin Scorsese'],
		description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    metascore: '85',
    stars: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
    userrating: 'Not yet rated',
  },
  {
    id: 8,
    title: 'The Fifth Element',
    year: '1997',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    runtime: '2h 6min',
    rating: 'PG-13',
    director: ['Luc Besson'],
		description: 'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr Zorg at bay.',
    metascore: '52',
    stars: ['Bruce Willis', 'Milla Jovovich', 'Gary Oldman'],
    userrating: 'Not yet rated',
  },
  {
    id: 9,
    title: 'Fargo',
    year: '1994',
    genre: ['Crime', 'Drama', 'Thriller'],
    runtime: '1h 38min',
    rating: 'R',
    director: ['Joel Coen', 'Ethan Coen'],
		description: 'Jerry Lundegaard\'s inept crime falls apart due to his and his henchmen\'s bungling and the persistent police work of the quite pregnant Marge Gunderson.',
    metascore: '85',
    stars: ['William H. Macy', 'Frances McDormand', 'Steve Buscemi'],
    userrating: 'Not yet rated',
  },
  {
    id: 10,
    title: 'Deadpool',
    year: '2016',
    genre: ['Action', 'Adventure', 'Comedy'],
    runtime: '1h 48min',
    rating: 'R',
    director: ['Tim Miller'],
		description: 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.',
    metascore: '65',
    stars: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
    userrating: 'Not yet rated',
  },
  {
    id: 11,
    title: 'Logan',
    year: '2017',
    genre: ['Action', 'Drama', 'Sci-Fi'],
    runtime: '2h 17min',
    rating: 'R',
    director: ['James Mangold'],
		description: 'In the near future, a weary Logan cares for an ailing Professor X somewhere on the Mexican border. However, Logan\'s attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.',
    metascore: '77',
    stars: ['Hugh Jackman', 'Patrick Stewart', 'Dafne Keen'],
    userrating: 'Not yet rated',
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
