import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class NewMovie extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let arr = e.target.stars.value.split(',');
        arr = arr.map(star => star[0] === ' ' ? star.slice(1) : star);
        arr.splice(3);
        this.props.addMovie({
            id: this.props.movies.length,
            title: e.target.title.value,
            director: e.target.director.value,
            metascore: e.target.metascore.value,
            stars: arr,
            img: e.target.image.value,
        })
        e.target.title.value = '';
        e.target.director.value = '';
        e.target.metascore.value = '';
        e.target.stars.value = '';
        e.target.image.value = '';
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="title" name="title" /><br />
                <input type="text" placeholder="director" name="director" /><br />
                <input type="number" min={0} max={100} placeholder="metascore" name="metascore" /><br />
                <input type="text" placeholder="stars (',' in between names)" name="stars" /><br />
                <input type="url" placeholder="image url" name="image" /><br />
                <input className="submit-cow" type="image" height="30" src="https://orig07.deviantart.net/8b02/f/2011/005/6/0/funny_cow_by_welikegroovyturtles-d36if3f.png" />
            </form>
        )
    }
} 
const mapStateToProps = (state) => {
    return { movies: state.movies }
}
export default connect(mapStateToProps, {addMovie})(NewMovie);