
const SignIn = () => {
   return (
      <>
         <header className="w-full bg-guest-background bg-cover">
            <div className='flex items-center justify-between mx-10 py-4'>
               <a className="text-6xl text-red-600 font-bold font-netflix-sans tracking-widest">NITFLIX</a>
            </div>
            <div className='bg-black/60 flex flex-col justify-start mx-96 p-5'>
               <h1 className='text-3xl text-white font-bold leading-normal'>Sign In</h1>
               <input className='rounded my-2 p-3 pe-48' type="text" placeholder='Email or phone number'/>
               <input className='rounded my-2 p-3 pe-48' type="text" placeholder='Password'/>
               <a href='/home' className="text-1xl text-center font-bold rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white my-12 px-5 py-2.5">Sign In</a>
               <div className="flex justify-between">
                  <div>
                     <input type="checkbox"/>
                     <label htmlFor="" className="text-zinc-400">Remember me</label>
                  </div>
                  <a href="" className="text-zinc-400 hover:underline cursor-pointer">Need help?</a>
               </div>
               <p className="text-zinc-500">New to Nitflix? <span className="text-white hover:underline cursor-pointer">Sign up now.</span></p>
               <p className="text-zinc-500">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <span className="text-blue-600 hover:underline cursor-pointer">Learn more.</span></p>
            </div>
         </header>
      </>
   );
}

export default SignIn;