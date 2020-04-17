import React, { Component } from "react";
class TableHeader extends Component {
  handleSort(attribute) {
    const sortAttribute = { ...this.props.sortAttribute };
    if (sortAttribute.attribute === attribute)
      sortAttribute.order = sortAttribute.order === "asc" ? "desc" : "asc";
    else {
      sortAttribute.attribute = attribute;
      sortAttribute.order = "asc";
    }
    console.log(sortAttribute);

    this.props.onSort(sortAttribute);
  }
  renderSort = (column) => {
    const { sortAttribute } = this.props;
    if (sortAttribute.attribute !== column.path) return null;
    if (sortAttribute.order === "asc") {
      return <i className="fa fa-sort-asc"></i>;
    } else return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.attributes.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.handleSort(column.path)}
            >
              {column.label}
              {this.renderSort(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
