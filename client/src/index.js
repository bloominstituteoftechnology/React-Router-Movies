import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
{
  /* <Router>
    <div>
        <Route exact path="/" component={MovieList} />
        <Route path="/news" component={Movie} />
    </div>
</Router>
If the location of the app is / then the UI hierarchy will be something like: <div>
    <Home />
    <!-- react-empty: 2 -->
</div>
And if the location of the app is / news then the UI hierarchy will be: <div>
    <!-- react-empty: 1 -->
  <NewsFeed />
</div>` */
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
