import React, { Component } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extHTML: {},
      errors: [],
      movie: {}
    };
  }
  formatForSearch(title) {
    if (title === undefined) return '';
    return title.replace(/\s/g, '_');
  }
  componentDidMount() {
    let test = this.props.fetchMovie();
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
        {/* <div dangerouslySetInnerHTML={this.state.extHTML} />
        <ul>{this.state.errors.map(error => <div>{error}</div>)}</ul> */}
        <div>Title: {this.formatForSearch(this.props.movie.title)}</div>
      </div>
    );
  }
}
