export default function Footer() {
  return (
    <div className="px-4 md:px-32">
      <div className="md:flex ">
        <div className="md:w-1/2">
          <img src="/bed.svg"></img>
        </div>
        <div>
          <h1 className="z-10 my-8 text-gray-500 text-center text-2xl md:text-4xl font-semibold">
            Need Help with a Project?
          </h1>
          <h1 className="text-5xl md:text-7xl mb-8 text-center  font-bold text-purple-800">
            Lets talk!
          </h1>
          <p className="md:text-left text-center my-8 text-lg px-4 md:text-2xl md:w-100 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua. At tellus
            at urna condimentum pellentesque.
          </p>
          <button className="px-16 border flex my-4 md:my-8 border-purple-800 py-8 rounded-xl text-center mx-auto">
      
          <div>Conatct Us</div>
        </button>
        </div>
      </div>
      <div className="text-center">
    
      </div>

      <div className="flex px-36 pt-24 md:pt-52">
        <div className="mx-1">
          <img src="/hospital.png" width={40} height={40} />
        </div>
        <div>
          <h1 className="text-purple-800 text-3xl font-bold">ElsoMed</h1>
        </div>
      </div>
      <div className="pt-8 pb-4 bg-beige-100 w-screen z-10 px-16 md:px-32 md:flex justify-between">
        <div className="flex border md:border-none border-gray-500 py-4  border-r-0 border-l-0 pt-2 text-lg  text-gray-500">
          <div>
            <h1 className="mx-4 md:mx-8">Company</h1>
          </div>
          <div>
            <h1 className="mx-4 md:mx-8">Feature</h1>
          </div>
          <div>
            <h1 className="mx-4 md:mx-8">Pricing</h1>
          </div>
          <div>
            <h1 className="mx-4 md:mx-8">Contact</h1>
          </div>
        </div>
        <div className="text-purple-800 flex md:px-16 pt-4 md:pt-0">
          <div>
            <h1 className="py-4 md:px-12">
              © 2021 Orizon. All Rights Reserved.
            </h1>
          </div>
          <div>
            <h1 className="border text-sm border-purple-800  px-8  md:px-12 py-4 rounded-xl">
              KG PRODUCTIONS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
