import Image from "next/image";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Transition } from "@headlessui/react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-8 shadow-md md:pt-16 pb-4 bg-beige-100 w-screen z-10  md:px-32  fixed ">
      <div className=" px-4 flex justify-between">
        <div className="flex">
          <div className="mx-1">
            <Image src="/hospital.png" width={40} height={40} />
          </div>
          <div>
            <h1 className="text-purple-800 text-3xl font-bold">ElsoMed</h1>
          </div>
        </div>

        <div className="hidden lg:flex pt-2 text-lg  text-gray-500">
          <div>
            <h1 className="mx-8">Company</h1>
          </div>
          <div>
            <h1 className="mx-8">Feature</h1>
          </div>
          <div>
            <h1 className="mx-8">Pricing</h1>
          </div>
          <div>
            <h1 className="mx-8">Contact</h1>
          </div>
        </div>
        <div className="text-purple-800 hidden lg:flex">
          <div>
            <button className="py-4 px-12">Login</button>
          </div>
          <div>
            <button className="border border-purple-800 px-12 py-4 rounded-xl">
              Sign Up{" "}
            </button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded=" false"
            className="m-2"
          >
            {!isOpen ? <MenuIcon className="text-purple-800" /> : <CloseIcon />}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transfrom"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transfrom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div
            className="bg-beige-100 shadow-md z-10 px-8 pt-8 w-screen lg:hidden block"
            id="mobile-menu"
          >
            <div className='my-2'>
              <a
                className=" text-gray-500  hover:text-purple-800 text-xl"
                href="#"
              >
                Company
              </a>
            </div>
            <div className='my-2'>
              <a
                className=" text-gray-500  hover:text-purple-800 text-xl"
                href="#"
              >
                Feature
              </a>
            </div>
            <div className='my-2'>
              <a
                className=" text-gray-500  hover:text-purple-800 text-xl"
                href="#"
              >
                Pricing
              </a>
            </div>
            <div className='my-2 pb-4'>
              <a
                className=" text-gray-500  hover:text-purple-800 text-xl"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
