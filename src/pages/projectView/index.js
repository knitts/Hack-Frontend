import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/navbar';
import web3 from '../../web3'

export default function Index() {
  return (
      <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
      <div className="h-screen content-center">
      <Navbar className="absolute"/>

      <section class="relative max-w-7xl w-full mt-10 pb-20 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
        <div class="container h-full content-center flex flex-wrap mx-auto items-center justify-center align-middle items-center ">

          <div className="flex flex-wrap justify-center w-full md:w-full mt-16 items-center bg-gray-900 bg-opacity-80 shadow px-20 pt-16 pb-20 rounded-lg">
            
            <div className="w-full">
              <h1 className="lg:text-5xl text-xl font-extrabold mb-4 leading-tight text-heading-blue text-center">Project Name Here</h1>
            </div>
            
            <div className="w-full">
              <p className="leading-7 text-base font-bold text-center my-6">Duis cupidatat laboris laboris est duis proident nostrud laboris.Duis cupidatat laboris laboris est duis proident nostrud laboris.Duis cupidatat laboris laboris est duis proident nostrud laboris.Duis cupidatat laboris laboris est duis proident nostrud laboris.</p>
            </div>

            <div className="w-full">
              <p className="leading-7 text-base font-bold text-center my-2">Github Link</p>
            </div>


            <div className="w-full flex justify-center">
              <img src="./bg.jpg" className="w-5/6 m-4 rounded-lg"/>
            </div>

            {/* <Link to="/Dashboard"> */}
            <div className="mt-8">  
              <input type="number" className="p-3 px-8 mr-4 border border-bg-white bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter ETH to invest"/>
              <button className=" px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                <div>
                  Invest on the project
                </div>
              </button>
            </div>
            {/* </Link> */}
          </div>
        
        </div>
      </section>
      </div>
      </div>
    )
}
