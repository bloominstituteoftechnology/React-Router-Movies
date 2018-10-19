const express = require("express")
const bodyParser = require("body-parser")
const CORS = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(CORS())

const movies = [
	{
		id: 0,
		title: "The Godfather",
		director: "Francis Ford Coppola",
		metascore: 100,
		stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"],
		image: "https://images6.alphacoders.com/617/thumb-1920-617286.jpg"
		// "http://www.gstatic.com/tv/thumb/v22vodart/6326/p6326_v_v8_aj.jpg"
	},
	{
		id: 1,
		title: "Star Wars",
		director: "George Lucas",
		metascore: 92,
		stars: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
		image: "https://images5.alphacoders.com/419/thumb-1920-419917.jpg"
		// "https://static1.funidelia.com/img/fr_landing_block/kylo-ren-star-wars.jpg"
	},
	{
		id: 2,
		title: "The Lord of the Rings: The Fellowship of the Ring",
		director: "Peter Jackson",
		metascore: 92,
		stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
		image: "https://images.alphacoders.com/204/thumb-1920-204553.jpg"
		// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbnERKmC42iOsXMrAnCI2B6j-eArEOgdQ-646kKob0fn9UVWf"
	},
	{
		id: 3,
		title: "Terminator 2: Judgement Day",
		director: "James Cameron",
		metascore: 94,
		stars: ["Arnold Schwarzenegger", "Edward Furlong", "Linda Hamilton"],
		image: "https://images2.alphacoders.com/633/thumb-1920-633664.jpg"
		// "https://stmed.net/sites/default/files/terminator-2%3A-judgment-day-wallpapers-29957-8069701.jpg"
	},
	{
		id: 4,
		title: "Dumb and Dumber",
		director: "The Farely Brothers",
		metascore: 76,
		stars: ["Jim Carrey", "Jeff Daniels", "Lauren Holly"],
		image: "https://images5.alphacoders.com/555/thumb-1920-555623.png"
		// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPVLRWSz9-4CyxA0XUwlBfE31lDroUOIqr68R8b4k2EtQyhFoGA"
	},
	{
		id: 5,
		title: "Tombstone",
		director: "George P. Cosmatos",
		metascore: 89,
		stars: ["Kurt Russell", "Bill Paxton", "Sam Elliot"],
		image: "https://images.alphacoders.com/825/thumb-1920-825729.jpg"
		// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAp9VK4rRwi9CHkubkFvUXm1LbE_wOO1pV1zWYnXT0G_zRb7y"
	}
]

app.get("/api/movies", (req, res) => {
	res.send(movies)
})

app.get("/api/movies/:id", (req, res) => {
	const movie = movies.filter(
		movie => movie.id.toString() === req.params.id
	)[0]
	res.status(200).json(movie)
})

app.post("/api/movies", (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body)
	res.status(201).json(movies)
})

app.listen(5000, () => {
	console.log("Server listening on port 5000")
})
