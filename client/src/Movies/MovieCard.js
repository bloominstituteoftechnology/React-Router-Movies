import React from 'react';

export default function MovieCard (props) {
  const { text } = props

  return (
    <div>
      <p className='Movie-details'>{text}</p>
    </div>
  )
}