import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieInfo } from '../actions';
import './MovieInfo.css';
import { Panel } from 'react-bootstrap';

class MovieInfo extends Component {
    componentDidMount() {
        this.props.getMovieInfo(this.props.match.params.id);
    }
    
    render() {
        console.log(this.props.selectedMovie.stars);
        return(
            <div>
                <Panel className="panel" header="Movie Details" bsStyle="primary">
                 <p>{this.props.selectedMovie.title}</p>
                 <p>Director:<span>{this.props.selectedMovie.director}</span></p>
                 <p>Metascore:<span>{this.props.selectedMovie.metascore}</span></p>
                 <p>Cast: 
                 {this.props.selectedMovie.stars.map((star, index) => {
                    return <span>{star}, </span>
                 })}</p>
                 </Panel>   
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps, { getMovieInfo })(MovieInfo);