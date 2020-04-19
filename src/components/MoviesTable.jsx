import React, { Component } from "react";
import Likes from "./common/likes";
import TableHeader from "./common/tableheader";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  render() {
    const attributes = [
      { label: "Title", path: "title" },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rent/day", path: "dailyRentalRate" },
      { key: 1 },
      { key: 2 },
    ];
    const { paginatedMovies, onDelete, onFavToggle } = this.props;
    return (
      <React.Fragment>
        <table className="table">
          <TableHeader
            attributes={attributes}
            sortAttribute={this.props.sortAttribute}
            onSort={this.props.onSort}
          />
          <tbody>
            {paginatedMovies.map((movie) => (
              <tr key={movie._id}>
                <td>
                  <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                </td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Likes
                    fav={movie.fav}
                    onFavToggle={() => onFavToggle(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
