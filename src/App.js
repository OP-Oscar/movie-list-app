import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";


function App() {
  const [watchList, setWatchList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const addMovie = (movie) => setWatchList([...watchList, movie]);

  return (
    <div className="App">
      <Header />
      <main>
      <MovieScreen
                addMovie={addMovie}
                movieList={movieList}
                page={page}
                setPage={setPage}
                watchList={watchList}
            />
            <Watchlist watchList={watchList}/>
      </main>
    </div>
  );
}

export default App;
