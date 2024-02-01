import {useState, useEffect} from "react";
import axios from "axios";
import {requests, getMovieImage} from "../api/Requests";

const Home = () => {
   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
   const [trendingMovies, setTrendingMovies] = useState([]);
   const [upcomingMovies, setUpcomingMovies] = useState([]);

   useEffect(() => {
      const fetchMovieData = async () => {
         await axios.get(requests.trendingMovies).then((response) => {
            setTrendingMovies(response.data.results);
         });

         await axios.get(requests.nowPlayingMovies).then((response) => {
            setNowPlayingMovies(response.data.results);
         });

         await axios.get(requests.upcomingMovies).then((response) => {
            setUpcomingMovies(response.data.results);
         });
      }

      fetchMovieData();
   }, []);

   const MovieList = ({ movies }) => {
      return movies.map((movie, i) => {
         return(
            <div className="inline-block px-2" key={i}>
               <img className="rounded w-28 h-44" src={getMovieImage(movie.poster_path)}/>
            </div>
         );
      });
   }

   return (
      <div className="bg-black font-bold text-white p-5">
         <header className="pb-10">
            <div className='flex items-center justify-between'>
               <a href="/home" className="text-5xl px-1 text-red-600 font-bold font-netflix-sans tracking-widest">NITFLIX</a>
               <div>
                  <input type="text" placeholder="Search your movie..." className="rounded mx-1 px-2 py-1 text-black"/>
                  <a href='' className="rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-2 py-1.5">🔍</a>
               </div>
            </div>
         </header>

         <div>
            {/* hero section */}
         </div>

         <div className="pb-5">
            <h3 className="text-2xl pl-2 pb-3">Trending Now</h3>
            <div className="overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
               <MovieList movies={trendingMovies} />
            </div>
         </div>
         <div className="pb-5">
            <h3 className="text-2xl pl-2 pb-3">Now Playing</h3>
            <div className="overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
               <MovieList movies={nowPlayingMovies} />
            </div>
         </div>
         <div className="pb-5">
            <h3 className="text-2xl pl-2 pb-3">Upcoming Movies</h3>
            <div className="overflow-x-auto whitespace-nowrap" style={{ scrollbarWidth: "none" }}>
               <MovieList movies={upcomingMovies} />
            </div>
         </div>
      </div>
   );
}

export default Home;