import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Movie(props) {
	const [movie, setMovie] = useState();

	// let id = 1;
	let { movieID } = useParams();
	console.log(movieID);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${movieID}`) // Study this endpoint with Postman
			.then((response) => {
				// Study this response with a breakpoint or log statements
				// and set the response data as the 'movie' slice of state
				console.log(response);
				setMovie(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		// This effect should run every time time
		// the `id` changes... How could we do this?
	}, [movieID]);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = evt => { }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const { title, director, metascore, stars } = movie;

	return (
		<div className="save-wrapper">
			<div className="movie-card">
				{/* {props.movie.map((item) => {
					return <MovieCard movies={item} key={item} />;
				})} */}
				<h2>{title}</h2>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map((star) => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button">Save</div>
		</div>
	);
}
