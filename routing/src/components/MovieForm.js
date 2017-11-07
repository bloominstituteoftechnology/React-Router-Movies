import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            director: '',
            metascore: '',
        }
    }
    handleChange = (e, field) => {
        const value = e.target.value;
        this.setState({
            [field]: value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className="MovieForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="title" value={this.state.title} onChange={(e)=> this.handleChange(e, 'title')}/>
                    <input type="text" placeholder="director" value={this.state.director} onChange={(e)=> this.handleChange(e, 'director')}/>
                    <input type="number" placeholder="metascore" value={this.state.metascore} onChange={(e)=> this.handleChange(e, 'metascore')}/>
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}


export default MovieForm;