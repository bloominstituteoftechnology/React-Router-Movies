import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/' component={Movies}/>

        <Route path='/movies/:itemID'>
          <Movie/>
        </Route>

      </div>
    </div>

  );
};

export default App;

