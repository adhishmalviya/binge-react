import React from "react";
import "./listgroups.css";
const ListGroups = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li
          onClick={() => {
            props.onItemSelect(item);
          }}
          key={item[props.valueProperty]}
          className={
            props.selectedItem === item._id
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
        >
          {item[props.textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroups.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroups;
