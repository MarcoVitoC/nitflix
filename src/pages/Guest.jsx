import Faq from '../components/FAQ'
import Footer from '../components/Footer'
import previewImg from '../assets/preview.jpg'
import phoneDownloadImg from '../assets/phone-download.png'
import platformImg from '../assets/platform.jpg'
import childrenImg from '../assets/children.png'

const Guest = () => {
   return (
      <>
         <header className="w-full bg-guest-background bg-cover">
            <div className='flex items-center justify-between mx-10 xl:mx-44 py-4'>
               <a className="text-4xl lg:text-5xl text-red-500 font-bold font-netflix-sans tracking-widest">NITFLIX</a>
               <div>
                  <select className='border border-zinc-500 bg-black/60 bg-opacity-80 text-white rounded me-5 py-0.5 md:pe-16'>
                     <option value="">🌐 Indonesian</option>
                     <option value="" selected>🌐 English</option>
                  </select>
                  <button className="rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-1">Sign In</button>
               </div>
            </div>
            <div className='flex flex-col items-center justify-center text-center px-5 py-44 xl:p-44 pb-36'>
               <h1 className='text-3xl lg:text-5xl text-white font-bold lg:font-extrabold leading-normal'>Enjoy big movies, hit series and more from IDR54,000.</h1>
               <p className='text-2xl lg:text-2xl text-white font-medium py-4'>Join today. Cancel anytime.</p>
               <p className='text-lg lg:text-xl text-white font-normal pb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
               <div className='flex flex-col md:flex-row items-center'>
                  <input className='border border-zinc-500 bg-black/60 bg-opacity-80 text-white rounded m-2 p-3 pe-48' type="text" placeholder='Email address'/>
                  <button className="text-2xl rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-5 py-2.5">Get Started &gt;</button>
               </div>
            </div>
            <hr className="border-4 border-zinc-800"/>
         </header>
         <section className="bg-black">
            <div className="flex flex-col items-center justify-between lg:flex-row mx-5 lg:mx-10 xl:mx-44 py-20">
               <div className="text-white w-100 lg:w-1/2">
                  <h1 className="font-bold lg:font-extrabold text-center lg:text-left text-3xl lg:text-5xl">Enjoy on your TV</h1>
                  <h6 className="font-normal text-center lg:text-left text-lg lg:text-2xl py-6">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h6>
               </div>
               <img className='max-w-full w-100 lg:w-1/2 h-auto' src={previewImg} alt="Preview"/>
            </div>
            <hr className="border-4 border-zinc-800"/>
         </section>
         <section className="bg-black">
            <div className="flex flex-col-reverse items-center justify-between lg:flex-row mx-5 lg:mx-10 xl:mx-44 py-20">
               <img className='max-w-full w-100 lg:w-1/2 h-auto' src={phoneDownloadImg} alt="Phone Download"/>
               <div className="text-white w-100 lg:w-1/2">
                  <h1 className="font-bold lg:font-extrabold text-center lg:text-left text-3xl lg:text-5xl">Download your shows to watch offline</h1>
                  <h6 className="font-normal text-center lg:text-left text-lg lg:text-2xl py-6">Save your favorites easily and always have something to watch.</h6>
               </div>
            </div>
            <hr className="border-4 border-zinc-800"/>
         </section>
         <section className="bg-black">
            <div className="flex flex-col items-center justify-between lg:flex-row mx-5 lg:mx-10 xl:mx-44 py-20">
               <div className="text-white w-100 lg:w-1/2">
                  <h1 className="font-bold lg:font-extrabold text-center lg:text-left text-3xl lg:text-5xl">Watch everywhere</h1>
                  <h6 className="font-normal text-center lg:text-left text-lg lg:text-2xl py-6">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h6>
               </div>
               <img className='max-w-full w-100 lg:w-1/2 h-auto' src={platformImg} alt="Platform"/>
            </div>
            <hr className="border-4 border-zinc-800"/>
         </section>
         <section className="bg-black">
            <div className="flex flex-col-reverse items-center justify-between lg:flex-row mx-5 lg:mx-10 xl:mx-44 py-20">
               <img className='max-w-full w-100 lg:w-1/2 h-auto' src={childrenImg} alt="Children"/>
               <div className="text-white w-100 lg:w-1/2">
                  <h1 className="font-bold lg:font-extrabold text-center lg:text-left text-3xl lg:text-5xl">Create profiles for kids</h1>
                  <h6 className="font-normal text-center lg:text-left text-lg lg:text-2xl py-6">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h6>
               </div>
            </div>
            <hr className="border-4 border-zinc-800"/>
         </section>
         <section className="bg-black">
            <Faq/>
            <hr className="border-4 border-zinc-800"/>
         </section>
         <Footer/>
      </>
   )
}

export default Guest