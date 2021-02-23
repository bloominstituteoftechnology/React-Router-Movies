import React from 'react';
import {useParams} from "react-router-dom"

export default function MovieCard (props) {
  let {id} = useParams()
  console.log(id);
  return null;
}
