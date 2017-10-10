import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <div>
    <Link to={`/${props.id}`}>{props.title}</Link>
  </div>
);