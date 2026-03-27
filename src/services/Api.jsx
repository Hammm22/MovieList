import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async()=>{
    const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
};

export const getMovieDetails = async(id)=>{
    const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
};

export const searchMovies = async(query)=>{
    const response = await axios.get(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
};