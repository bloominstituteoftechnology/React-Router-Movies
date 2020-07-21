import React from 'react';
import {useHistory, Link} from 'react-router-dom'

const SavedList = props => {
const history = useHistory()

return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (

<Link to={`/movies/${movie.id}`} kea={index} className='saved-movie'>{movie.title}</Link>

   ))}
   <Link to = '/'><div className='home-button'>Home</div></Link>
  </div>
)};

export default SavedList;
