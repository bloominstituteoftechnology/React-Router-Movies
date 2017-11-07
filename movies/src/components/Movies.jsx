import React, { Component } from 'react';

//import Movie from './Movie';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../index.css';
import { Link } from 'react-router-dom';
//import MovieContainer from './MovieContainer';
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState(
      {
        movies: this.props.fetchMovies()
      },
      () => {}
    ); //  console.log('Mounted State:', this.state))
  }

  render() {
    const columns = [
      {
        Header: 'Id',
        accessor: 'id'
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: props => {
          console.log('props id', props.original.id);
          return (
            <Link to={`/movies/:${props.original.id}`} className="Title">
              {props.value}
            </Link>
          );
        }
      },
      {
        Header: 'Director',
        accessor: 'director'
      },
      {
        id: 'Score',
        Header: 'Score',
        assessor: d => d.metascore,
        Cell: props => {
          /*console.log('metascore props', props); */ return (
            <span>{props.original.metascore}</span>
          );
        }
      },
      {
        Header: 'Stars',
        accessor: 'stars',
        Cell: props => (
          <span state={{ display: 'inline' }} className="StarList">
            {props.value.map(star => {
              return (
                <span state={{ display: 'inline' }} className="Star" key={star}>
                  {star}
                </span>
              );
            })}
          </span>
        )
      }
    ];
    return (
      <div>
        <ReactTable
          className="-highlight"
          defaultPageSize={5}
          data={this.props.movies}
          columns={columns}
          /*
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              if (rowInfo) {
                //console.log('rowInfo.row',rowInfo.row)
                this.setState({
                  movie: this.props.getMovie(rowInfo.row.id)
                });
                //console.log('rowInfo id', id)
              }
            }
          };
        }}
        */
        />


      </div>
    );
  }
}

export default Movies;
