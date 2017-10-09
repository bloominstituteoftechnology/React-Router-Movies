import React, { Component } from 'react';
import { newMovie, getMovies } from '../actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AddMovie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {
                id: null,
                title: '',
                director: '',
                metascore: 0,
                stars: [],
            },
            inputStars: {
                star1: '',
                star2: '',
                star3: '',
            }

        }
    }

    componentDidMount() {
        this.props.getMovies();
        console.log(this.props);
        const z = this.props.movies.length;
        this.setState({
            movie: {
                id: z,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        });
    }

    submitNewMovie(event) {
        event.preventDefault()
        this.handleStars();
        console.log(this.state.movie)
        this.props.newMovie(this.state.movie)
        this.setState({
            movie: {
                id: null,
                title: '',
                director: '',
                metascore: 0,
                stars: []
            },
            inputStars: {
                star1: '',
                star2: '',
                star3: '',
            }
        })
    }

    handleTitle(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: event.target.value,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        })
    }

    handleDirector(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: event.target.value,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        })
    }

    handleMetascore(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: event.target.value,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        })
    }

    handleStar1(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: event.target.value,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        })
    }

    handleStar2(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: event.target.value,
                star3: this.state.inputStars.star3,
            }
        })
    }

    handleStar3(event) {
        event.preventDefault();
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: this.state.movie.stars
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: event.target.value,
            }
        })
    }

    handleStars() {
        console.log(this.state.inputStars);
        const starArr = [];
        starArr.push(this.state.inputStars.star1)
        starArr.push(this.state.inputStars.star2)
        starArr.push(this.state.inputStars.star3)
        console.log(starArr);
        this.setState({
            movie: {
                id: this.state.movie.id,
                title: this.state.movie.title,
                director: this.state.movie.director,
                metascore: this.state.movie.metascore,
                stars: starArr,
            },
            inputStars: {
                star1: this.state.inputStars.star1,
                star2: this.state.inputStars.star2,
                star3: this.state.inputStars.star3,
            }
        });
        console.log(this.state.movie.stars);
    }

    

    render() {
        return (
            <div>
                <div>
                    <h1>Add a new movie!</h1>
                </div>
                <form onSubmit={this.submitNewMovie.bind(this)}>
                    <input type='text' onChange={this.handleTitle.bind(this)} className="movies" placeholder='Title'></input>
                    <input type='text' onChange={this.handleDirector.bind(this)} className="movies" placeholder='Director'></input>
                    <input onChange={this.handleMetascore.bind(this)} type="number" className="movies" placeholder='Metascore'></input>
                    <div className="movies">
                        <input type='text' onChange={this.handleStar1.bind(this)} className="movies" placeholder='Stars'></input>
                        <input type='text' onChange={this.handleStar2.bind(this)} className="movies" placeholder='Stars'></input>
                        <input type='text' onChange={this.handleStar3.bind(this)} className="movies" placeholder='Stars'></input>
                    </div>
                    <button type="submit" className="movies">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    };
};

export default withRouter(connect(mapStateToProps, { newMovie, getMovies })(AddMovie));