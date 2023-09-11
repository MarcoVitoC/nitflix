import guestBackground from '../assets/Guest-Background.jpeg'

const Guest = () => {
   return (
      <>
         <div className="w-full bg-cover bg-center" style={{backgroundImage: `url(${guestBackground})`}}>
            <div className='flex items-center justify-between mx-44 py-4'>
               <a className="text-4xl text-red-500 font-bold">NITFLIX</a>
               <div>
                  <select className='border-solid border-2 border-black rounded me-5 py-0.5 pe-16'>
                     <option value="">🌐 Indonesian</option>
                     <option value="" selected>🌐 English</option>
                  </select>
                  <button className="rounded-md bg-red-600 text-white px-4 py-1">Sign In</button>
               </div>
            </div>
            <div className='flex flex-col items-center justify-center text-center p-44'>
               <h1 className='text-5xl text-white font-extrabold'>Enjoy big movies, hit series and more from IDR54,000.</h1>
               <p className='text-xl text-white font-medium py-4'>Join today. Cancel anytime.</p>
               <p className='text-lg text-white font-medium pb-3.5'>Ready to watch? Enter your email to create or restart your membership.</p>
               <div className='flex items-center'>
                  <input className='border-solid border-2 border-black rounded me-2 p-3 pe-48' type="text" placeholder='Email address'/>
                  <button className="text-2xl rounded bg-red-600 text-white px-5 py-2.5">Get Started &gt;</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Guest