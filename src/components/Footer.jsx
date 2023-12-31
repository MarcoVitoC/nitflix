
const Footer = () => {
   return (
      <section className="bg-black text-zinc-300">
         <div className="mx-10 xl:mx-44 py-6 lg:py-12">
            <p className="pb-5">Questions? Call <span className="underline cursor-pointer">118-914-432-3241</span></p>
            <div className="grid grid-rows-6 lg:grid-rows-5 grid-cols-2 lg:grid-cols-4 gap-2">
               <p className="underline underline-offset-1 cursor-pointer">FAQ</p>
               <p className="underline underline-offset-1 cursor-pointer">Help Center</p>
               <p className="underline underline-offset-1 cursor-pointer">Account</p>
               <p className="underline underline-offset-1 cursor-pointer">Media Center</p>
               <p className="underline underline-offset-1 cursor-pointer">Investor Relations</p>

               <p className="underline underline-offset-1 cursor-pointer">Jobs</p>
               <p className="underline underline-offset-1 cursor-pointer">Redeem Gift Cards</p>
               <p className="underline underline-offset-1 cursor-pointer">Buy Gift Cards</p>
               <p className="underline underline-offset-1 cursor-pointer">Ways to Watch</p>

               <p className="underline underline-offset-1 cursor-pointer">Terms of Use</p>
               <p className="underline underline-offset-1 cursor-pointer">Privacy</p>
               <p className="underline underline-offset-1 cursor-pointer">Cookie Preferences</p>
               <p className="underline underline-offset-1 cursor-pointer">Corporate Information</p>

               <p className="underline underline-offset-1 cursor-pointer">Contact Us</p>
               <p className="underline underline-offset-1 cursor-pointer">Speed Test</p>
               <p className="underline underline-offset-1 cursor-pointer">Legal Notices</p>
               <p className="underline underline-offset-1 cursor-pointer">Only on Netflix</p>
            </div>
            <select defaultValue="English" className='border border-zinc-500 bg-black/60 bg-opacity-80 text-white rounded my-7 py-0.5 pe-16'>
               <option value="Indonesian">🌐 Indonesian</option>
               <option value="English">🌐 English</option>
            </select>
            <p>Nitflix Indonesia</p>
         </div>
      </section>
   )
}

export default Footer