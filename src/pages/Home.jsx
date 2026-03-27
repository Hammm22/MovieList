import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search");

    if (query) {
      const delay = setTimeout(() => {
        searchMovies(query).then(setMovies);
      }, 500);

      return () => clearTimeout(delay);
    } else {
      getPopularMovies().then(setMovies);
    }
  }, [location.search]);

  return (
    <div className="px-6 md:px-12 pt-32 pb-20">
      <h1 className="text-xl mb-6">
        {location.search ? "Search Result" : "Trending Movies"}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;