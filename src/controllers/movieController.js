import axios from "axios";

const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';
const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;


export const getMovies = async () => {
    const res = await axios.get(TRENDING_URL);
    return res;
};

export const getMovie = async (query) => {
    console.log('Query:', query);
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const res = await axios.get(URL);
    return res;
}

