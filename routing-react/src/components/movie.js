import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions';
import '../App.css';
import { withRouter } from 'react-router-dom'


class Movie extends Component {
    constructor(props) {
        super();
    }

    componentDidMount(){
        console.log("the component mounted dood!!", this.props);
        this.props.getMovie(this.props.match.params.id);
    }
    
    starPower(arr) {
        return <h5>{arr}</h5>
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.movies);
    }

    render() {
        console.log(this.props.movies.stars);
        return (
                <div>
                    <h1>{this.props.movies.title}</h1>
                    <h4>Directed by <b>{this.props.movies.director}</b></h4>
                    <h4>Metascore: {this.props.movies.metascore}</h4>
                    <h4>Stars:</h4>
                    {this.props.movies.stars && this.props.movies.stars.map((person, i) => { 
                        return (<h5 key={i}>{person}</h5>)
                    })}
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    };
};

export default withRouter(connect(mapStateToProps, { getMovie })(Movie));