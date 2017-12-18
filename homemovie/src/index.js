import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

BrowserRouter as Router, 
Link, 
Route } from 'react-router-dom';

class App extends Component {
    constructor() {
        super(); 

        this.state = {
            name: "",
            detail: []
        };

    }
    render () {
        return(
            <div>
                Whatever
                </div>

        );
    }
}