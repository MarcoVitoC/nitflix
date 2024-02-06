import YouTube from "react-youtube";

const Hero = ({ movie, trailerKey }) => {
   const baseBackdropUrl = import.meta.env.VITE_BASEIMGURL;

   return(
      <div className="mt-5 mb-10 px-2 flex flex-col-reverse items-center rounded bg-cover h-auto lg:flex-row lg:h-[76vh]" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${baseBackdropUrl}${movie.backdrop_path})` }}>
         <div className="flex flex-col p-5">
            <h1 className="text-5xl">{movie.title}</h1>
            <p className="text-xl font-medium py-5">{movie.overview}</p>
            <div className="self-center lg:self-start">
               <button className="rounded bg-white hover:bg-slate-200 active:bg-slate-300 text-black px-5 py-2">
                  ▶️ Play
               </button>
               <button className="rounded bg-white hover:bg-slate-200 active:bg-slate-300 text-black px-5 ml-2 py-2">
                  ❌ Close
               </button>
            </div>
         </div>
         <div className="p-5">
            <YouTube videoId={trailerKey} />
         </div>
      </div>
   );
}

export default Hero;