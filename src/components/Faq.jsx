import { useState } from 'react'

const Faq = () => {
   const [isOpen, setIsOpen] = useState(0)
   const handleToggle = (index) => {
      setIsOpen(index === isOpen ? 0 : index);
   }

   return (
      <div className="mx-10 xl:mx-44 py-16">
         <h1 className="font-bold lg:font-extrabold text-4xl lg:text-5xl text-center text-white pb-10">Frequently Asked Questions</h1>

         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(1)}>
               <p className='text-xl lg:text-2xl'>What is Nitflix?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 1 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">Nitflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br/><br/> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There&apos;s always something new to discover and new TV shows and movies are added every week!</p>
            </div>
         </details>
         
         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(2)}>
               <p className='text-xl lg:text-2xl'>How much does Nitflix cost?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 2 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">Watch Nitflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.</p>
            </div>
         </details>
         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(3)}>
               <p className='text-xl lg:text-2xl'>Where can I watch?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 3 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">Watch anywhere, anytime. Sign in with your Nitflix account to watch instantly on the web at nitflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/><br/> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you&apos;re on the go and without an internet connection. Take Nitflix with you anywhere.</p>
            </div>
         </details>
         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(4)}>
               <p className='text-xl lg:text-2xl'>How do I cancel?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 4 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">Nitflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </div>
         </details>
         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(5)}>
               <p className='text-xl lg:text-2xl'>What can I watch on Nitflix?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 5 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">Nitflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
         </details>
         <details className="bg-zinc-800 mb-2 hover:bg-zinc-700 active:bg-zinc-600 cursor-pointer">
            <summary className="flex items-center justify-between text-white mb-2 px-6 pt-1" onClick={() => handleToggle(6)}>
               <p className='text-xl lg:text-2xl'>Is Nitflix good for kids?</p>
               <span className='text-5xl lg:text-6xl pb-2 font-thin'>{isOpen === 6 ? '×' : '+'}</span>
            </summary>
            <hr className="border border-black"/>
            <div>
               <p className="text-xl lg:text-2xl text-white mb-2 px-6 py-3">The Nitflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </div>
         </details>
         
         <p className='text-white text-center text-lg lg:text-xl mt-12 mb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
         <div className='flex flex-col md:flex-row items-center justify-center'>
            <input className='border border-zinc-500 bg-black/60 bg-opacity-80 text-white rounded m-2 p-3 pe-48' type="text" placeholder='Email address'/>
            <button className="text-2xl rounded bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-5 py-2.5">Get Started &gt;</button>
         </div>
      </div>
   )
}

export default Faq