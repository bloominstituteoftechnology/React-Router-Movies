import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class SavedList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="saved-list">
				<h3>Saved Movies</h3>
				<div className="saved">
					{this.props.list.map((movie, index) => (
						<NavLink
							to={`/movies/${movie.id}`}
							style={{ textDecoration: 'none', color: 'black' }}
							activeStyle={{ fontWeight: 'bold', color: 'lightseagreen' }}
						>
							<span className="saved-movie" key={index}>
								{movie.title}
							</span>
						</NavLink>
					))}
				</div>
				<NavLink
					to="/"
					style={{
						textDecoration: 'none',
						color: 'black',
						fontWeight: 'bold',
						borderBottom: '1px solid black'
					}}
				>
					Home
				</NavLink>
			</div>
		);
	}
}
