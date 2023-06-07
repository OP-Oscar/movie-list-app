import React from 'react'

function MovieScreen(props) {
    const {movieList, page, setPage, watchList} = props

    let movieDisplay = movieList.map( (movie, index) => {
        return <h2>{movie.original_title}</h2>

    })

  return (
    <div className='page'>
        <h1>OP's Movie Theatre</h1>
        <h3>Add a movie to your watchlist</h3>
        <br />
        <div className='movie-container'>{movieDisplay}</div>
    </div>
  )
}

export default MovieScreen