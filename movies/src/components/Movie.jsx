import React, { Component } from 'react';
import axios from 'axios';
export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extHTML: {},
      errors: [],
      movie: {},
      ready: false
    };
    this.get = false
  }
  isReady = () => {
    let rv = this.props.movie.title !== undefined;
    if (!rv) return false;
    if (this.get) return true
    this.get = true
    console.log('axios get');
    axios
      .get(
        'http://en.wikipedia.org/?search=' +
          this.formatForSearch(this.props.movie.title)
      )
      .then(response => {
        console.log('then response', response);
        this.setState(
          {
            ready: true,
            extHTML: {__html: response.data}
          },
          () => {
            return true;
          }
        );
      })
      .catch(errors => {
        console.log('catch errors:', errors);
        this.setState(
          {
            errors
          },
          () => {
            return true;
          }
        );
      });
    return false;
  };

  formatForSearch(title) {
    if (title === undefined) return '';
    const rv = title.replace(/\s/g, '_');
    return rv;
  }
  componentDidMount() {
    let test = this.props.fetchMovie();
    this.setState({
      movie: test
    });
    //if (this.props.movie === undefined) return;

    
    console.log('fetchMovie result:', test);
    console.log('fetchMovie result type:', typeof test);
    this.setState(
      {
        movie: test
      },
      () => {
        console.log('Movie did mount props', this.props);
        console.log('Movie did mount state', this.state);
      }
    );
    /*
    this.props.fetchMovie().then(
        result => console.log('fetchMovie result',result)
    ).errors(err => console.log('fetchMovie erros',err))

    this.setState({
        movie: this.props.fetchMovie()
    },() => {
        console.log("Movie did mount props",this.props)
        console.log("Movie did mount state",this.state)
    }) 
    */
    /*
    Ajax.getJSON(
      'https://en.wikipedia.org/?search=' +
        this.formatForSearch(this.props.title).then(
          response => {
            this.setState({
              extHTML: { __html: response }
            });
          },
          err => {
            this.setState({
              errors: err
            });
          }
        )
    );
    */
  }
  render() {
    return (
      <div>
        {!this.isReady() ? (
          <div />
        ) : (
          <div>
            <div>Title: {this.props.movie.title}</div>
            <div dangerouslySetInnerHTML={this.state.extHTML} />
            <ul>{this.state.errors.map(error => <div>{error}</div>)}</ul>
          </div>
        )}
      </div>
    );
  }
}
