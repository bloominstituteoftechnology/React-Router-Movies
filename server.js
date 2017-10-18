const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const movies = [
  {
    id: 0,
    title: 'Home Again',
		director: 'Hallie Meyers-Shyer',
		genre: ['Drama', 'Comedy', 'Romance'],
    metascore: 43,
    poster:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxNTQ0NjIwOV5BMl5BanBnXkFtZTgwODE5NjA5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		rating: 'PG-13',
		release: 'September 8, 2017',
		runtime: 97,
		stars: ['Nat Wolff', 'Reese Witherspoon', 'Lake Bell'],
		studio: 'Open Road Films',
    summary:
      'Recently separated from her husband (Michael Sheen), Alice (Reese Witherspoon) decides to start over by moving back to her hometown of Los Angeles with her two young daughters. During a night out on her 40th birthday, Alice meets three aspiring filmmakers who happen to be in need of a place to live. Alice agrees to let the guys stay in her guest house temporarily, but the arrangement ends up unfolding in unexpected ways. Alice’s unlikely new family and new romance comes to a crashing halt when her ex-husband shows up, suitcase in hand.'
  },
  {
    id: 1,
    title: 'It',
    director: 'Andy Muschietti',
		genre: ['Drama', 'Thriller', 'Horror'],
    metascore: 71,
    poster:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		rating: 'R',
		release: 'September 8, 2017',
		runtime: 135,
    stars: ['Bill Skarsgård', 'Jaeden Lieberher', 'Finn Wolfhard'],
		studio: 'New Line Cinema',
    summary:
      'When children begin to disappear in the town of Derry, Maine, a group of young kids are faced with their biggest fears when they square off against an evil clown named Pennywise, whose history of murder and violence dates back for centuries.'
  },
  {
    id: 2,
    title: 'Dunkirk',
    director: 'Christopher Nolan',
		genre: ['Action', 'Drama', 'History', 'Thriller', 'War'],
    metascore: 94,
    poster:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		rating: 'PG-13',
		release: 'July 21, 2017',
		runtime: 106,
    stars: ['Fionn Whitehead', 'Barry Keoghan', 'Mark Rylance'],
		studio: 'Warner Bros.',
    summary:
      'Dunkirk opens as hundreds of thousands of British and Allied troops are surrounded by enemy forces. Trapped on the beach with their backs to the sea they face an impossible situation as the enemy closes in.'
  },
  {
    id: 3,
    title: 'Rememory',
    director: 'Mark Palansky',
		genre: ['Sci-Fi', 'Drama', 'Mystery'],
    metascore: 46,
    poster:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzNzAyNzYwOF5BMl5BanBnXkFtZTgwMDg5ODEyMzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
		rating: 'PG-13',
		release: 'September 8, 2017',
		runtime: 111,
		stars: ['Peter Dinklage', 'Matt Ellis', 'Jordana Largy'],
		studio: 'Lionsgate Premiere',
		summary: 'Rememory explores the unexplained death of Gordon Dunn (Martin Donovan), a visionary scientific pioneer whose body is found shortly after the unveiling of his newest work: a device able to extract, record and play a person\'s memories. Gordon\'s wife, Carolyn (Julia Ormond), retreats into her house and cuts off contact with the outside world when a mysterious man (Peter Dinklage) shows up. After stealing the machine, he uses it to try and solve the mystery, beginning an investigation of memories that lead him to unexpected and dangerous places.'
  }
];

app.get('/movies', (req, res) => {
  res.send(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.filter(
    movie => movie.id.toString() === req.params.id
  )[0];
  res.send(movie);
});

app.post('/new-movie', (req, res) => {
  if (req.body.id !== undefined) movies.push(req.body);
  res.send(movies);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
