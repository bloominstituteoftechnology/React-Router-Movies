import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {

  },
  link: {
    textDecoration: 'none'
  },
  chip: {
    margin: '10px 6px'
  }
}

class SavedList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(event, movie) {
    event.preventDefault();
    const removeFromSavedList = this.props.removeFromSavedList;
    removeFromSavedList(movie);
  }

  render() {

    const { classes } = this.props;

    /*<h3 savemovie={this.saveMovie}>Saved Movies:</h3>*/
    return (
      <div>
      <div className="saved-list">
        {this.props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`} className={classes.link}>
          <Chip
            color='secondary'
            label={movie.title}
            onDelete={this.handleDelete}
            className={classes.chip}
            deleteIcon={<CancelIcon />}
          />
          </NavLink>
        ))}
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(SavedList);
