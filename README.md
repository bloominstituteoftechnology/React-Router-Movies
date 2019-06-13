# Client Side Routing w/ React Router v. 4

Topics:

* React Router
* Using Link and NavLink to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

## Instructions

* **Fork** this repository, then clone your fork.
* **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
* **In the root of this directory**: Run `yarn install` to download dependencies.
* Run the server using `yarn start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
* In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
* Still inside the `client` folder run `yarn start` to run the client application.

* Once your application is up and running on the client, you should see a browser window that looks like this at `localhost:3000`
  ![Movies Home](https://ibin.co/3xhmmHVl9BKF.png)

### Part 1:

### Part 2:


### Add `Save Movie` functionality.

You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button.

### Turn your Saved Movie list into `Link`s.

You will need to uncomment lines 29-39 in `Movie.js` to complete this. Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

### Turn your Saved Movie `Link`s into `NavLink`s.
