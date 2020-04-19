import React from "react";
const MovieForm = (props) => {
  return (
    <div>
      <h1>Movie id is: {props.match.params.id}</h1>
      <button
        className=" btn-primary btn-danger"
        onClick={() => props.history.replace("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
