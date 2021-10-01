import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { Transition } from "@headlessui/react";
import SignUp from '../../pages/signUp';
import { useHistory } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const walletID = localStorage.getItem('ConnectedWalletID');
  let history = useHistory();

  const SignOut = () => {
    localStorage.removeItem('ConnectedWalletID');
    history.push('/');
  }

  return (
    <div className="mb-20">
      <nav className=" w-full flex bg-transparent text-white backdrop-filter backdrop-blur-md bg-opacity-100 shadow-lg">
        <div className="flex max-w-7xl w-full lg:w-4/5 mx-auto px-6 py-3 sm:px-6 justify-between">
          
          <div className="flex items-center h-16">
            <div className="flex items-center">
                  <Link to="/" className="">
                  <h1 className="text-2xl font-extrabold">kNITTs</h1>
                  </Link>
            </div>
          </div>

          <div className="flex items-center h-16">
              <div className="hidden md:block flex">
                <div className="ml-10 flex justify-end">
                  
                  {(!walletID)?
                    <>
                    <Link to="/AboutUs">
                    <button className="text-heading-blue hover:bg-gray-500 hover:shadow px-5 py-2 rounded-md text-md font-medium focus:outline-none ">
                      About Us
                    </button>
                    </Link>
                    <Link to="/Login">
                    <button  className="text-heading-blue hover:bg-gray-500 hover:shadow px-8 py-2 rounded-md text-md font-medium focus:outline-none ">
                      Login
                    </button>
                    </Link>
                    </>
                    :
                    <div className="flex align-center items-center">
                    <Link to="/Dashboard" className="">
                    <button  className="text-heading-blue hover:bg-gray-500 hover:bg-opacity-20 hover:shadow px-4 py-2 rounded-md text-md font-medium focus:outline-none ">
                      Dashboard
                    </button>
                    </Link>
                    <Link to="/Leagues" className="mr-2">
                    <button  className="text-heading-blue hover:bg-gray-500 hover:bg-opacity-20 hover:shadow px-6 py-2 rounded-md text-md font-medium focus:outline-none ">
                      Leagues
                    </button>
                    </Link>
                    <button onClick={SignOut}  className="text-heading-blue bg-red-800 hover:bg-red-900 hover:shadow px-6 py-2 rounded-md text-md font-medium focus:outline-none ">
                      Sign Out
                    </button>
                    </div>
                  }
                </div>
            </div>

            <div className="-mr-2 flex flex-row md:hidden">

              <button
                onClick={() => {setIsOpen(!isOpen); console.log('state:', isOpen);}}
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 mr-3 rounded-md text-heading-blue hover:text-heading-blue hover:bg-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
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
              <div ref={ref} className="flex flex-row px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  
                <Link to="/AboutUs">
                <button className="text-heading-blue hover:bg-gray-500 hover:shadow px-5 py-2 rounded-md text-md font-medium focus:outline-none ">
                  About Us
                </button>
                </Link>
                
                <Link to="/Login">
                <button  className="text-heading-blue hover:bg-gray-500 hover:shadow px-8 py-2 rounded-md text-md font-medium focus:outline-none ">
                  Login
                </button>
                </Link>

              </div>
            </div>
          )}

        </Transition>
      </nav>
    </div>
  );
}

export default Navbar
