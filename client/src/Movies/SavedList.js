import React from 'react';
import {useHistory} from 'react-router-dom';

 function Home(props) {
  const history = useHistory();
  console.log(history);

  const routeToHome = event => {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };
  return(
    <>

<div className="saved-list">
  <h3>Saved Movies:</h3>
  {props.list.map(movie => (
    <span className="saved-movie">{movie.title}</span>
  ))}
  
    <div onClick={routeToHome} className="home-button">
      Home
    </div>

</div>
</>
  );
};

export default Home;

// const SavedList = props => (
//   <div className="saved-list">
//     <h3>Saved Movies:</h3>
//     {props.list.map(movie => (
//       <span className="saved-movie">{movie.title}</span>
//     ))}
//     <Link to={routeToHome}>
//       <div className="home-button">
//         Home
//         </div>
//     </Link>
//   </div>
// );

// export default SavedList;
