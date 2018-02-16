import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../../actions/movieActions';
import './NewMovie.css';

class NewMovie extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    componentDidMount() {
        this.props.getData();
    }

    handleSubmit = (e) => {

    }

    handleChange = (e) => {

    }

    render() {
        return (
            <div className='Movie'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Title of the movie...'
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Meta Score...'
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder={`Main Star's Name`}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder={`Main Star's Name`}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        placeholder={`Main Star's Name`}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state
    }
}

export default connect(mapStateToProps, { getData })(NewMovie);