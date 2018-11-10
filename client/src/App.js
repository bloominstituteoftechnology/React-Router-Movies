import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
});

const styles = {
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  menuBtn: {
    // marginLeft: -12,
    // marginRight: 20,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };

    this.AddToSavedList = this.addToSavedList.bind(this);
    this.removeFromSavedList = this.removeFromSavedList.bind(this);
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  removeFromSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.splice(savedList.indexOf(movie), 1);
    this.setState({savedList});
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <AppBar position='static' color='primary'>
          <Toolbar className={classes.toolBar}>
          <Typography variant="h6" color="inherit">
            Lambda Movie Selector
          </Typography>
          <NavLink to ="/" className={classes.link}><Button className={classes.menuBtn}color='inherit'>Home</Button></NavLink>
          </Toolbar>
        </AppBar>
        <Route exact path="/" render={props => <MovieList {...props} />} />
        <Route path="/movies/:id" render={props => <Movie {...props} savedList={this.state.savedList} addToSavedList={this.addToSavedList} />} />
        <SavedList list={this.state.savedList} removeFromSavedList={this.removeFromSavedList} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
