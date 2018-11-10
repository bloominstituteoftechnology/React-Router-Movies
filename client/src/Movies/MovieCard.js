import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '20px',
    display: 'block',
    width: '320px',
    height: '360px'
    // padding: '20px'
  },
  container: {
    height: '93.5%',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    // paddingBottom: '20px',
    // border: '1px solid black'
  },
  action: {
    height: '100%'
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit',
    height: '100%',
  },
  metaScore: {
    textAlign: 'center',
    margin: '0 auto',
    // border: '1px solid black'
  },
  actor: {
    marginBottom: '0px',
    // border: '1px solid black',
    textAlign: 'center'
  },
  actorList: {
    // border: '1px solid black',
    margin: '0px',
    listStyleType: 'none',
    padding: '0px',
    textAlign: 'center'
  },
  actorListItem: {
    fontSize: '16px',
    '&:nth-child(2)': {
      margin: '5px 0px'
    }
  }
}


const MovieCard = props => {

  const { classes } = props;

  return (

  <Card className={classes.root}>
    <NavLink className={classes.linkStyle} to={`/movies/${props.movie.id}`}>
    <CardActionArea className={classes.action}>
      <CardContent className={classes.container}>
        <Typography variant='h5' style={{/*border: '1px solid black',*/ height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/*className={classes.fontStyle}*/><span>{props.movie.title}</span></Typography>


      <Typography style={{textAlign: 'center'}}>
        Director: <em>{props.movie.director}</em>
      </Typography>

      <Typography variant='h6' className={classes.actor}><strong>Actors</strong></Typography>
      <ul className={classes.actorList}>
        {props.movie.stars.map(star => (
          <li className={classes.actorListItem} key={star}>
            {star}
          </li>
        ))}
      </ul>

          <Divider />


          <Typography className={classes.metaScore} variant='h5'>
            Metascore<br /><strong>{props.movie.metascore}</strong>
          </Typography>

      </CardContent>
      </CardActionArea>
      </NavLink>
    </Card>
  );

};

export default withStyles(styles)(MovieCard);
