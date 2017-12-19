import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../actions/movieActions';
import './Movie.css';

class Movie extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    componentDidMount() {
        this.props.getData();
        const movies = this.props.movies;
        const movieID = Number(this.props.match.params.id);
        console.log('Movies in CDM', movies);
        console.log('Props in  CDM', this.props);
        this.setState({
            movie: (this.props.movies[movieID]),
            id: this.props.match.params.id,
            title: this.props.movies[movieID].title,
            director: this.props.movies[movieID].director,
            metascore: this.props.movies[movieID].metascore,
            stars: this.props.movies[movieID].stars,
        })
    }

    render() {
        if (this.state.stars) {
            return (
                <div className='Movie'>
                    <div className='Title'>{this.state.title}</div>
                    <div className='LineWrap'>
                        <div className='Desc'>Director: </div>
                        <div className='Value'>{this.state.director}</div>
                    </div>
                    <div className='LineWrap'>
                        <div className='Desc'>MetaScore: </div>
                        <div className='Value'>{this.state.metascore}</div>
                    </div>
                    <div className='LineWrap'>
                        <div className='Desc'><b>Main Stars:</b></div>
                        {this.state.stars.map((star, index) => {
                            return (
                                <Star key={index} star={star} />
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

class Star extends Component {
    render() {
        return (
            <div className='Stars'>
                <div className='Desc'>Name: </div>
                <div className='Value'>{this.props.star}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    }
}

export default connect(mapStateToProps, { getData })(Movie);