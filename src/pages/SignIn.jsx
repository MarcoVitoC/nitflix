
const SignIn = () => {
   return (
      <>
         <header className="w-full bg-guest-background bg-cover">
            <div className='flex items-center justify-between mx-10 py-4'>
               <a className="text-6xl text-red-600 font-bold font-netflix-sans tracking-widest">NITFLIX</a>
            </div>
            <div className="flex justify-center pb-24">
               <div className='bg-black/70 flex flex-col max-w-md px-16 pt-16 pb-32'>
                  <h1 className='text-3xl text-white font-semibold leading-normal mb-5'>Sign In</h1>
                  <input className='rounded my-2 p-3' type="text" placeholder='Email or phone number'/>
                  <input className='rounded my-2 p-3' type="text" placeholder='Password'/>
                  <a href='/home' className="text-1xl text-center font-bold rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white mt-10 mb-2 px-5 py-2.5">Sign In</a>
                  <div className="flex justify-between mb-20">
                     <div>
                        <input type="checkbox"/>
                        <label htmlFor="" className="text-zinc-400">Remember me</label>
                     </div>
                     <a href="" className="text-zinc-400 hover:underline cursor-pointer">Need help?</a>
                  </div>
                  <p className="text-zinc-500 my-3">New to Nitflix? <span className="text-white hover:underline cursor-pointer">Sign up now.</span></p>
                  <p className="text-zinc-500 text-sm leading-none">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span></p>
               </div>
            </div>
         </header>
         <footer className="bg-black text-zinc-400">
            <div className="mx-10 xl:mx-44 py-6 lg:py-12">
               <p className="pb-5">Questions? Call <span className="cursor-pointer hover:underline">118-914-432-3241</span></p>
               <div className="grid grid-rows-6 lg:grid-rows-5 grid-cols-2 lg:grid-cols-4 gap-2">
               <p className="hover:underline cursor-pointer">FAQ</p>
               <p className="hover:underline cursor-pointer">Help Center</p>

               <p className="hover:underline cursor-pointer">Terms of Use</p>
               <p className="hover:underline cursor-pointer">Privacy</p>
               <p className="hover:underline cursor-pointer">Cookie Preferences</p>
               <p className="hover:underline cursor-pointer">Corporate Information</p>
            </div>
            <select defaultValue="English" className='border border-zinc-500 bg-black/60 bg-opacity-80 text-white rounded my-7 py-0.5 pe-16'>
               <option value="Indonesian">🌐 Indonesian</option>
               <option value="English">🌐 English</option>
            </select>
            </div>
         </footer>
      </>
   );
}

export default SignIn;