import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "./movies.css";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  deleteMovie(movie) {
    const movies = this.state.movies.filter((m) => !(m._id === movie._id));
    this.setState({ movies: movies });
  }
  render() {
    return (
      <div>
        <h3>
          {this.state.movies.length === 0
            ? "There are no movies!"
            : `There are ${this.state.movies.length} movies`}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rent</td>
              <td />
            </tr>
          </thead>
          {this.state.movies.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.deleteMovie(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Movies;
