import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayMovie } from '../actions'; 

class SelectedMovie extends Component{
    
    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.displayMovie(id);
    }
    render(){
        return(
            <div className="display-movie" key={this.props.movie.id}> 
            <div className="display-movie-title"><span>Title:</span> {this.props.movie.title}</div>
            <div className="display-movie-details"><span>Director:</span> {this.props.movie.director}</div>
            <div className="display-movie-details"><span>Score:</span> {this.props.movie.metascore}</div>
            <div className="display-movie-details"><strong>Stars:</strong> <hr/> {this.props.movie.stars ?
                this.props.movie.stars.map((star)=> {
                    return <div key={star} className="display-star">{star}</div>;
                }): null}</div> 
          </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
    movie: state.movie
    };
};

export default connect(mapStateToProps,{displayMovie})(SelectedMovie);