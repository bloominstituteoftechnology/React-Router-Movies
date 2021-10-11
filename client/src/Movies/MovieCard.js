import React from "react";

export default function MovieCard(props) {
  const { listElement, cardElement } = props;
  const {stars} = props

  if (listElement) return sharedHtml(false, props);

  if (cardElement) {
    return (
      <div className="save-wrapper">
        {sharedHtml(true, props, stars)}
        <div onClick={() => {props.addToSavedList(props.id)}} className="save-button">Save</div>
      </div>
    );
  }
}

function sharedHtml(cardEl, props, stars) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      {cardEl && (
        <>
          <h3>Actors</h3>

          {stars.map((star) => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
