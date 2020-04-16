import React from "react";
const Likes = (props) => {
  let starClass = "fa fa-star";
  if (!props.fav) starClass += "-o";
  return (
    <i
      class={starClass}
      style={{ cursor: "pointer" }}
      onClick={props.onFavToggle}
      aria-hidden="true"
    ></i>
  );
};

export default Likes;
