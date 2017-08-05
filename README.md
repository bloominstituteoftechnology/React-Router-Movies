# Routing

Topics:

 * React Router
 * componentDidMount
 * RouteProvider as Route
 * Switch
 * Link


## Project Description

### Initialize Project
  * Clone the project. - DONE √
  * Run the server using `node server.js` - DONE √
  * In a separate folder create your project. - DONE √
    - `create-react-app movies`
  * Install the following packages `redux`, `react-redux`, `redux-promise`, `react-router-dom`, and `prop-types`. - DONE √
    - `npm i --save redux react-redux redux-promise react-router-dom prop-types`
    ```console
    $  npm i --save redux react-redux redux-promise react-router-dom prop-types
        npm notice created a lockfile as package-lock.json. You should commit this file.
        npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
        npm WARN react-router-dom@4.1.2 requires a peer of react@^15 but none was installed.
        npm WARN react-router@4.1.2 requires a peer of react@^15 but none was installed.

        + prop-types@15.5.10
        + redux@3.7.2
        + redux-promise@0.5.3
        + react-redux@5.0.5
        + react-router-dom@4.1.2
        added 37 packages in 10.701s
    ```

    - and `axios`!
    ```console
    $ npm i --save axios
        + axios@0.16.2
        added 2 packages in 10.624s
    ```

    - and `reactstrap and bootstrap`!
    ```console
    $  npm i --save bootstrap reactstrap
        npm WARN reactstrap@4.8.0 requires a peer of react-transition-group@^1.1.2 but none was installed.

        + bootstrap@3.3.7
        + reactstrap@4.8.0
        added 7 packages in 18.616s
    ```

    - and `react-transition-group`!
    ```console
    $ npm i --save react-transition-group
        npm WARN reactstrap@4.8.0 requires a peer of react-transition-group@^1.1.2 but none was installed.

        + react-transition-group@2.2.0
        added 3 packages in 12.216s
    ```

  * Set up your router to serve two pages. - OKAY √
  * Your home page should retrieve a list of movies from the server and display them. - DONE √
  * When a user clicks on a movie title they should be taken to a second page that displays more info about each movie. - OKAY √


### Notes/Hints
 * Dispatch the action to retrieve the list of movies from inside of `componentDidMount`. - DONE √
 * Use `<Link />` tags to navigate between both pages. - DONE √
 * The two routes on the server are
   1. `/movies` which returns the array of movies, and 
   2. `/movies/:id` which accepts the `id` from the movie object as a query parameter.
 * Both routes are meant to handle `GET` requests. - OKAY √

### Extra Credit
 * Add a new page `/new-movie` that displays some input fields that allow the user to post a new movie to the server.  The route on the server `/new-movie` accepts a post request and an object for the new movie.  Make sure that it matches the format of the existing movie objects.
