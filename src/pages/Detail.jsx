import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/Api";
import PageWrapper from "../components/Pagewrapper";

export default function Detail() {
  const location = useLocation();
  const initialData = location.state;

  const { id } = useParams();
  const [movie, setMovie] = useState(initialData);

  useEffect(() => {
    if (!movie) {
      getMovieDetails(id).then(setMovie);
    }
  }, [id]);

  if (!movie) {
    return <div className="pt-32 text-center">Loading...</div>;
  }
  return (
    <PageWrapper>
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          className="w-full h-[60vh] object-cover"
        />
        <div
          className="absolute bottom-0 left-0 w-full h-40 
        bg-linear-to-t from-black to-transparent"
        />
        <div className="flex gap-6 -mt-25 relative z-10 px-6 md:px-12">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            className="w-45 rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 pt-32 px-6 md:px-12">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-gray-400 text-sm">{movie.release_date}</p>
            <p className="text-gray-300 mt-4 max-w-2xl">{movie.overview}</p>
            <p className="mt-2 text-yellow-400">⭐ {movie.vote_average} / 10</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
