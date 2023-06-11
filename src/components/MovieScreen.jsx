import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen(props) {
  const { movieList, page, setPage, watchList, addMovie, removeMovie } = props;

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
      />
    );
  });


  const decrement = () => {
    setPage(page - 1)
  }

  const increment = () => {
    setPage(page + 1);
  }
  return (
    <div className="page">
      <h1 style={{ marginBottom: 0 }}>OP's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
      <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <br />
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
