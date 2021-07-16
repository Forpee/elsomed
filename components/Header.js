import Image from "next/image";
export default function Header() {
  return (
    <div className="md:h-screen px-4 md:px-32 md:w-screen md:flex">
      <div className="md:w-1/3  my-auto">
        <h1 className='text-5xl text-center md:text-left md:text-7xl text-purple-800 font-semibold pt-36'>WE TAKE CARE OF YOUR HEALTH</h1>
        <div className="bg-green-200 w-16 h-2 mx-auto md:mx-0 rounded-xl my-8"></div>
        <div className='md:pr-32 px-4 text-gray-500 py-8'>
          Health Problems even minor ones, can interfere with or oversahdow
          other parts of your life.Even minor health issues such as aches, pains
          , lethargy, and indigestion
        </div>
        <div className="flex justify-center md:justify-start pt-8">
          <div>
            <button className="px-16 py-4 text-white bg-purple-800 rounded-xl mr-4">Explore</button>
          </div>
          <div>
            <button className="px-16 py-4 text-purple-800 bg-indigo-100 rounded-xl ml-4">Our App</button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-beige-100 pt-24 md:pt-48 md:ml-56 relative md:flex h-full">
        <img className="w-full  my-auto" src="/header.svg" />
      </div>
    </div>
  );
}
