import React,{Component} from 'react';
import {setMovie} from '../../actions';
import {connect} from 'react-redux';

class Movie extends Component {
    componentDidMount() {
        this.props.setMovie(this.props.match.params.id);
    }
    render (){
        return (
        <div>
            <ul>
            <li>{this.props.movie.title}</li>
            <li>{this.props.movie.director}</li>
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        movie:state.setMovie
    }
}
export default connect(mapStateToProps,{setMovie})(Movie);

