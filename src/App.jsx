import { apple, bkground, chrome, github } from "./assets"
export default function App() {
  return (
    <div className="">
      <section className="min-h-screen w-full flex justify-center items-center bg-[#220d2a]">
        <img src={bkground} alt="something happens" height={1200} width={1200} className=" rounded-xl z-10 shadow-lg shadow-[#160d1c]" />
          <div className=" absolute right-[277px] z-20 w-72 h-96 ">
            <div className="text-white text-lg pt-4 flex justify-center font-medium">Students portal</div>
            <div className="flex justify-center pt-[88px] pb-2"><input type="text" placeholder="email" className="pl-2 border-b-2 border-gray-500 border-opacity-35 bg-transparent text-white outline-none"/></div>
            <div className="flex justify-center p-2"><input type="text" placeholder="reg no." className="pl-2 border-b-2 border-gray-500 border-opacity-35 bg-transparent text-white outline-none"/></div>
            <div className="flex justify-center p-2"><input type="password" placeholder="password" className="pl-2 border-b-2 border-gray-500 border-opacity-35 bg-transparent text-white outline-none"/></div>
            <div className="flex justify-center p-2 pt-5 pb-2"><button className=" font-medium bg-fuchsia-900 rounded-md py-1 px-4 text-white items-center">log in</button></div>
            <div className="flex gap-10 pt-5 justify-center">
              <div><img src={github} alt="github" /></div>
              <div><img src={chrome} alt="google" /></div>
              <div><img src={apple} alt="apple" /></div>
            </div>
          </div>
      </section>
     
      
    </div>
  )
}