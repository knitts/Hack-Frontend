import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/navbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function SignUp() {
    return (
        <div className="overflow-hidden text-white" >
        <div className="h-screen content-center" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
        <Navbar className="absolute"/>

        <section class="relative h-screen max-w-7xl w-full -mt-10 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
          <div class="container h-full content-center flex flex-wrap mx-auto items-center align-middle items-center justify-center">

            <div className="w-full md:w-1/2 items-center bg-gray-900 bg-opacity-80 shadow p-20 rounded-lg">
              <div className="w-full">
                <h1 className="lg:text-5xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Please Sign Up</h1>
              </div>
              
              <div className="flex mb-4">
                <p className="leading-7 text-base text-left">This is a one-time process. Kindly fill in the below details!</p>
              </div>

              <input placeholder="Enter your name" className="w-full p-2 text-gray-300 filter shadow-lg bg-gray-900 border border-gray-800 placeholder-gray-500 rounded-lg focus:outline-none"></input>

              <Link to="/Dashboard">
                <button className="mt-10 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">Proceed</button>
              </Link>
            </div>
         
          </div>
        </section>
        </div>
        </div>
    )
  }
  export default SignUp;
