import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "./movies.css";
import Pagination from "./common/pagination";
import paginate from "./common/utils/paginate";
import ListGroups from "./common/listgroups";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: false,
    sortAttribute: { attribute: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ genres, movies: getMovies() });
  }
  deleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => !(m._id === movie._id));
    this.setState({ movies: movies });
  };
  handleFavToggle = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].fav = !movies[index].fav;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ currentGenre: genre._id, currentPage: 1 });
  };
  handleSort = (sortAttribute) => {
    this.setState({ sortAttribute });
  };
  render() {
    const { length: count } = this.state.movies;
    const filteredMovies = this.state.currentGenre
      ? this.state.movies.filter(
          (item) => item.genre._id === this.state.currentGenre
        )
      : this.state.movies;
    const sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortAttribute.attribute],
      [this.state.sortAttribute.order]
    );
    const paginatedMovies = paginate(
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            <ListGroups
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={this.state.currentGenre}
            />
          </div>
          <div className="col">
            <h3>
              {count === 0
                ? "There are no movies!"
                : `There are ${filteredMovies.length} movies`}
            </h3>
            <MoviesTable
              paginatedMovies={paginatedMovies}
              onDelete={this.deleteMovie}
              sortAttribute={this.state.sortAttribute}
              onFavToggle={this.handleFavToggle}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
