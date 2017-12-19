import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/movieActions';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Movie from '../Movie/Movie';

class HomePage extends Component {
    state = {

    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        console.log(this.props)
        return (
            <div className='Home'>
                <div className='Home__Header'>List of Movies</div>
                <div className='MovieLinks'>
                    {this.props.movieData.map((item, index) => {
                        return (
                            <Link to={`/movie/${item.id}`} key={index} className='MovieLink'>{`Title: ${item.title}`}</Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieData: state
    }
}

export default connect(mapStateToProps, { getData })(HomePage);