import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        navigate(`/movie/${movie.id}`, {
          state: movie,
        })
      }
      className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
    >
      {movie.poster_path ? (
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="w-full h-70 object-cover"
        />
      ) : (
        <div className="w-full h-70 bg-zinc-800 flex items-center justify-center text-gray-400 text-sm">
          No Image
        </div>
      )}    

      <div className="p-4">
        <h3 className="text-sm">{movie.title}</h3>
      </div>
      {console.log(movie)}
    </motion.div>
  );
}
