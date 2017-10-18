import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovie} from '../actions';
import {Link} from 'react-router-dom';



class MovieItem extends Component {
    componentDidMount() {
        
        this.props.getMovie(this.props.match.params.id)        
        
    }
    render() {
        return ( 
            
            <div> <Link to="/movie">MoviesList</Link>
                  <div> {this.props.movie &&  <div>  <p>{`Title: ${this.props.movie.title}`}</p>
            <p>{`Director: ${this.props.movie.director}`}</p>
            <p>{`MetaScore: ${this.props.movie.metascore}`}</p>
            <div>Stars: {this.props.movie.stars.map((star, i) => <h5 key={i}>{star} </h5>)}</div></div>} </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
};


export default connect(mapStateToProps, { getMovie })(MovieItem);