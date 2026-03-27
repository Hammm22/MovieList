import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../services/api";

function Navbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  // 🔍 debounce search
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delay = setTimeout(() => {
      searchMovies(query).then((res) => {
        setResults(res.slice(0, 5));
      });
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <>
      {/* 🔥 TRIGGER AREA */}
      <div
        onMouseEnter={() => setShow(true)}
        className="fixed top-0 left-0 w-full h-10 z-40"
      />

      {/* 🔝 NAVBAR */}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          setTimeout(() => setShow(false), 1000);
        }}
        className={`fixed top-4 left-0 right-0 mx-auto w-[90%] max-w-5xl z-50
        transition-all duration-300 ease-[0.22,1,0.36,1]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
      >
        <div
          className="flex items-center justify-between px-6 py-3 
          bg-white/10 backdrop-blur-xl border border-white/20 
          rounded-2xl relative"
        >
          <h1 onClick={() => navigate("/")} className="cursor-pointer">
            Hamm22 MovieList Website
          </h1>

          {/* 🔍 SEARCH */}
          <div className="relative w-[40%]">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Search size={16} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            {/* 🔥 DROPDOWN */}
            {results.length > 0 && (
              <div
                className="absolute top-12 w-full z-50 
                bg-[#0f0f0f]/80 
                border border-white/10 
                rounded-xl 
                shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
                max-h-80 overflow-y-auto"
              >
                {results.map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      navigate(`/movie/${movie.id}`, { state: movie });
                      setQuery("");
                      setResults([]);
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-white/10 cursor-pointer"
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w92/${movie.poster_path}`
                          : "https://via.placeholder.com/50x70"
                      }
                      className="w-10 h-14 object-cover rounded"
                    />
                    <span className="text-sm">{movie.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
