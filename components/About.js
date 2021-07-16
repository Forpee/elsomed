export default function About() {
  return (
    <div className="md:h-screen w-screen">
      <div className="mx-auto text-center text-4xl text-purple-900">
        <h1>ABOUT</h1>
        <div className="h-2 w-16 bg-green-200 rounded-xl mx-auto my-4"></div>
        <h1 className="text-center text-gray-500 text-xl my-8">
          Our team consists only of the best talents
        </h1>
      </div>

      <div className='px-4'>
        <div className="md:flex my-8 justify-center">
          <div className="md:w-48 h-48  mx-4 my-8 md:my-0  bg-indigo-100 rounded-3xl p-4 ">
            <img src="/suit.svg" className="h-40 m-auto"></img>
          </div>
          <div className="md:w-100 h-48 mx-4 bg-purple-100 rounded-3xl p-8">
            <h1 className="text-purple-800 font-semibold text-lg my-2">
              Lorem Ipsum
            </h1>
            <h1 className="text-gray-500">Aliquip </h1>
            <p className="my-4 text-xs md:text-sm text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="md:flex my-8 justify-center">
          <div className="md:w-100 h-48 mx-4 bg-green-100 rounded-3xl p-8">
            <h1 className="text-purple-800 font-semibold text-lg my-2">
              Excepteur Sint
            </h1>
            <h1 className="text-gray-500">Commodo </h1>
            <p className="my-4  text-xs md:text-sm text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="md:w-48 my-8 md:my-0  h-48 mx-4  bg-blue-100 rounded-3xl p-4">
            <img src="/plan.svg" className="h-40 m-auto"></img>
          </div>
        </div>
        <div className="md:flex my-8 justify-center">
          <div className="md:w-48 my-8 md:my-0  h-48 mx-4  bg-purple-100 rounded-3xl p-4">
            <img src="/bottle.svg" className="h-40 m-auto"></img>
          </div>
          <div className="md:w-100 h-48 mx-4 bg-indigo-100 rounded-3xl p-8">
            <h1 className="text-purple-800 font-semibold text-lg my-2">
              Neque Aliquam
            </h1>
            <h1 className="text-gray-500">Eget</h1>
            <p className="my-4 text-xs md:text-sm text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
