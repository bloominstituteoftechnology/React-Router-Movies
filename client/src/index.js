import React from 'react';
import ReactDOM from 'react-dom';

<Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={NewsFeed} />
    </div>
</Router>
If the location of the app is / then the UI hierarchy will be something like: <div>
    <Home />
    <!-- react-empty: 2 -->
</div>
And if the location of the app is / news then the UI hierarchy will be: <div>
    <!-- react-empty: 1 -->
  <NewsFeed />
</div>`
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
