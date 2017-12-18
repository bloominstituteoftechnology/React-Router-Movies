import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
     <div>
         <Header />
         <Switch>
             <Route path="/greet/:name/:lastname" component=(Greeter) />
             <Route path="/about/company" component=(About) />
             <Route path="/about/" component=(About) />
             <Route path="/" component=(Home) />
             <Route component={NotFound} />
         </Switch>
    </div>
</BrowserRouter>, 
document.getElementById('root')
};
             
             
             
             
             
             
             <App />, document.getElementById('root'));
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