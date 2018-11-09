import React, { Component } from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
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
  }

  handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }

  handleClick() {
    // alert('You clicked the Chip.'); // eslint-disable-line no-alert
  }

  render() {

    const { classes } = this.props;

    /*<h3 savemovie={this.saveMovie}>Saved Movies:</h3>*/
    return (
      <div>
      <div className="saved-list">
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} className={classes.link}>
          <Chip
            color='secondary'
            label={movie.title}
            onClick={this.handleClick}
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
