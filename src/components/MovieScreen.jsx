import React from 'react'
import MovieCard from './MovieCard'

function MovieScreen(props) {
    const {movieList, page, setPage, watchList, addMovie} = props

    const movieDisplay = movieList.map( (movie, index) => {
        return <MovieCard movie={movie} addMovie={addMovie}/>
    })

  return (
    <div className="page">
        <h1>OP's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <br />
        <div className='movie-container'>{movieDisplay}</div>
    </div>
  )
}

export default MovieScreen