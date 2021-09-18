import React,{ useState } from 'react'
import { Transition } from "@headlessui/react";

function Navbar({isLoggedIn}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <nav className=" w-full flex bg-transparent text-white backdrop-filter backdrop-blur-md bg-opacity-100 shadow-lg">
        <div className="flex max-w-7xl w-full lg:w-4/5 mx-auto px-6 py-3 sm:px-6 justify-between">
          
          <div className="flex items-center h-16">
            <div className="flex items-center">
                {/* <img
                    className="h-12 w-12"
                    src="./logo.svg"
                    alt="logo"
                  />
                  <img
                    className="h-7 mx-2"
                    src="./logo_text.png"
                    alt="logo"
                  /> */}
                  <h1 className="text-2xl font-extrabold">kNITTs</h1>
            </div>
          </div>

          <div className="flex items-center h-16">
              <div className="hidden md:block flex">
                <div className="ml-10 flex justify-end">
                  <a href="#" className="text-heading-blue hover:bg-gray-900 hover:shadow px-5 py-2 rounded-md text-md font-medium focus:outline-none ">
                    About Us
                  </a>

                  <a href="#" className="text-heading-blue hover:bg-gray-900 hover:shadow px-5 py-2 rounded-md text-md font-medium focus:outline-none ">
                    Login
                  </a>

                  <a href="#" className="text-heading-blue hover:bg-gray-900 hover:shadow px-5 py-2 rounded-md text-md font-medium focus:outline-none ">
                    Signup
                  </a>
                </div>
            </div>

            <div className="-mr-2 flex md:hidden">

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center p-2 mr-3 rounded-md text-heading-blue hover:text-heading-blue hover:bg-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false">

                <span className="sr-only">Open main menu</span>

                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
              
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">

          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="text-heading-blue hover:bg-heading-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </a>

                <a href="#" className="text-heading-blue hover:bg-heading-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Login
                </a>

                <a href="#" className="text-heading-blue hover:bg-heading-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Signup
                </a>

              </div>
            </div>
          )}

        </Transition>
      </nav>
    </div>
  );
}

export default Navbar
