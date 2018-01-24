import React, { Component } from 'react';
import {connect} from 'react-redux';
import {pickMovie} from '../actions';

export class Synop extends Component {
    componentDidMount() {
        this.props.pickMovie(this.props.match.params.id);
    }
    render(){
        return(
        <div>
            <h1>{this.props.pickedMovie.title}</h1>
            <h2>{this.props.pickedMovie.director}</h2>
            <h3>{this.props.pickedMovie.metascore}</h3>
            <h4>{this.props.pickedMovie.stars}</h4>

        </div>
        );}
}

const mapStateToProps = (state) => {
    return {
    pickedMovie: state.pickedMovie,
    };
};


export default connect(mapStateToProps, {pickMovie})(Synop);