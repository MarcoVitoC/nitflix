const baseUrl = import.meta.env.VITE_BASEURL;
const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
const apiKey = import.meta.env.VITE_APIKEY;

const requests = {
   nowPlayingMovies: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
   trendingMovies: `${baseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US&page=1`,
   upcomingMovies: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
   topRatedMovies: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
};

const getMovieImage = (path) => {
   return `${baseImgUrl}/${path}`;
}

export { requests, getMovieImage };