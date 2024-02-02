const Hero = ({ movie }) => {
   const baseBackdropUrl = import.meta.env.VITE_BASEIMGURL;

   return(
      <div className="my-10 px-2 grid grid-cols-2 content-center rounded bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseBackdropUrl}${movie.backdrop_path})`, height: '500px' }}>
         <div className="px-5">
            <h1 className="text-5xl">{movie.title}</h1>
            <p className="text-xl py-5">{movie.overview}</p>
            <button className="rounded bg-white hover:bg-slate-200 active:bg-slate-300 text-black px-5 py-2">
               ▶️ Play
            </button>
         </div>
      </div>
   );
}

export default Hero;