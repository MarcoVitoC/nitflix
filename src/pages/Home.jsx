import {useState, useEffect} from "react";
import axios from "axios";
import requests from "../api/Requests"

const Home = () => {
   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
   const [trendingMovies, setTrendingMovies] = useState([]);

   useEffect(() => {
      axios.get(requests.nowPlayingMovies).then((response) => {
         setNowPlayingMovies(response.data.results);
      });
   }, []);
   console.log(nowPlayingMovies);

   useEffect(() => {
      axios.get(requests.trendingMovies).then((response) => {
         setTrendingMovies(response.data.results);
      });
   }, []);
   console.log(trendingMovies);

   return (
      <div className="font-bold text-3xl">🏡 This is a home page...</div>
   );
}

export default Home;