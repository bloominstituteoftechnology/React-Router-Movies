import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../actions';

class AddMovie extends Component {

	submit = (e) => {
    e.preventDefault();
    let canSubmit = true;
    const refs = this.refs;
    const movie = {
      title: refs.t.value,
      director: refs.d.value,
      metascore: refs.s.value,
      stars: [refs.s1.value, refs.s2.value, refs.s3.value],
      id: this.props.movies.length
    };
    for(let key in movie) {
      if(movie[key] === "") canSubmit = false;
    }
    if(canSubmit) {
      this.props.addMovie(movie);
      for(let ref in this.refs) {
        this.refs[ref].value = "";
      }
    }
  }

	render = () => {
    console.log(this.props);
    return (
    	<footer className="footer">
    		<div>
          <h2>Add a movie!</h2>
          <form>
            <input ref="t" type="text" placeholder="Title" />
            <input ref="d" type="text" placeholder="Director" />
            <input ref="s" type="number" placeholder="Score" />
            <input ref="s1" type="text" placeholder="Star 1" />
            <input ref="s2" type="text" placeholder="Star 2" />
            <input ref="s3" type="text" placeholder="Star 3" />
            <button onClick={this.submit}>Add!</button>
          </form>
    		</div>
    	</footer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state
  };
};

export default connect(mapStateToProps, { addMovie })(AddMovie);