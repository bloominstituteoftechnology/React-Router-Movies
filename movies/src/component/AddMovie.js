import React from 'react';

export default (props) => (
  <form onSubmit={(e) => {
    e.preventDefault();
    props.handleOnSubmit({
      id: props.length,
      title: e.target.title.value,
      director: e.target.director.value,
      metascore: e.target.metascore.value
    });
  }}>
    <label>Title<input type="text" name="title"/></label>
    <label>Director<input type="text" name="director"/></label>
    <label>Metascore<input type="text" name="metascore"/></label>
    <button>Submit</button>
  </form>
);




