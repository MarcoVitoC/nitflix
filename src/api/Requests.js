const baseUrl = import.meta.env.VITE_BASEURL;
const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
const apiKey = import.meta.env.VITE_APIKEY;

const requests = {
   nowPlayingMovies: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`,
   trendingMovies: `${baseUrl}/trending/movie/day?api_key=${apiKey}&language=en-US&page=1`,
   upcomingMovies: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

const getMovieImage = (path) => {
   return `${baseImgUrl}/${path}`;
}

const getMovieById = (id) => {
   return `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
}

export { requests, getMovieImage, getMovieById };