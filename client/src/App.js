import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            savedList: []
        };
    }

    addToSavedList = movie => {
        const savedList = this.state.savedList
            // const savedListIds = savedList.map(i => i.id);

        savedList.map(i => i.id).includes(movie.id) ? alert(`${movie.title} is already in list`) : savedList.push(movie);
        this.setState({ savedList });
    };

    removeFromSavedList = movie => {
        let savedList = this.state.savedList.filter(m => m !== movie);

        this.setState({ savedList });

        alert(`${movie.title} was removed from the saved list`);
    }

    clearList = () => {
        this.setState({
            savedList: []
        })
    }

    render() {
        return ( <
            div >
            <
            SavedList list = { this.state.savedList }
            remove = { this.removeFromSavedList }
            clear = { this.clearList }
            /> <
            Route exact path = '/'
            component = { MovieList }
            />

            <
            Route path = '/movies/:id'
            render = {
                props => < Movie {...props }
                save = { this.addToSavedList }
                />} / >
                <
                /div>
            );
        }
    }