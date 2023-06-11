import React from "react";

const MovieCard = (props) => {
  const { movie, addMovie, removeMovie, watchList } = props;

  const movieDescription = movie.overview; //movie description.(whole)

  //trim the string to the maximum length (100 characters)
  let trimmedString = movieDescription.substr(0, 100);

  //re-trim if we are in the middle of a word and adding 3dots
  trimmedString =
    trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    ) + "...";

  const inWatchlist = watchList.filter((ele) => {
    return ele.id === movie.id;
  });

  const updatedButtons =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)} style={{ marginBottom: 10 }}>
        Add To List
      </button>
    ) : (
      <button onClick={() => removeMovie(movie)} style={{ marginBottom: 10 }}>
        Remove
      </button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="No Cover Found"
          style={{ marginBottom: -10 }}
        />
        <h3 style={{ marginBottom: -20 }}>{movie.original_title}</h3>
        <h5 style={{ marginBottom: 0, color: "#CCCC33" }}>
          <i>Released {movie.release_date.substring(0, 4)}</i>
        </h5>
        <h6 style={{ margin: 10 }}>{trimmedString}</h6>
      </div>
      {updatedButtons}
    </div>
  );
};

export default MovieCard;
