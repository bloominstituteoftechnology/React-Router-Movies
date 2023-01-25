import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SavedList({ list }) {
  const history = useHistory();
  const showHomePage = () => {
    history.push(`/`);
  };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(({ title }, index) => (
        <span className="saved-movie" key={index}>
          {title}
        </span>
      ))}
      <div className="home-button" onClick={showHomePage}>
        Home
      </div>
    </div>
  );
}
