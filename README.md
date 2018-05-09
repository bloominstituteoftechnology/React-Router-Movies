# Client Side Routing w/ React Router v. 4

Topics:

* React Router
* Using Link and NavLink to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

## Instructions
### Part 1:

### Part 2:






## Stretch Goals.

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

### Refactor so that our code is DRY.

You may notice that we are using essentially the same exact JSX code in the `Movie` component and the `MovieDetails` component in `MovieList.js` create a new component in `MovieCard.js` that returns this JSX code. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.

### Add `Save Movie` funcitonality.

You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button.

### Turn your Saved Movie list into `Link`s.

You will need to uncomment lines 29-39 in `Movie.js` to complete this. Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

### Turn your Saved Movie `Link`s into `NavLink`s.
