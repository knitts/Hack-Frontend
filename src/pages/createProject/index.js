import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/navbar';
import web3 from '../../web3'

export default function Index() {
  return (
      <div className="overflow-hidden text-white" >
      <div className="h-screen content-center" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
      <Navbar className="absolute"/>

      <section class="relative max-w-7xl w-full -mt-28 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
        <div class="container h-full content-center flex flex-wrap mx-auto items-center justify-center align-middle items-center ">

          <div className="w-full md:w-1/2 mt-16 items-center bg-gray-900 bg-opacity-80 shadow px-20 pt-16 pb-20 rounded-lg">
            <div className="w-full">
              <h1 className="lg:text-5xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Create Project</h1>
            </div>
            
            <div className="flex">
              <p className="leading-7 text-base font-bold text-left">Kindly Fill out the details!</p>
            </div>
            <input className="mt-8 my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter your project name"/>
            <textarea className="my-2 p-3 pb-16 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter your project description"/>
            <input className="my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter project link"/>
            {/* <Link to="/Dashboard"> */}
              <button className="mt-4 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              <div>
                Submit to the League
              </div>
              </button>
            {/* </Link> */}
          </div>
        
        </div>
      </section>
      </div>
      </div>
    )
}
