import React from 'react'
import {Link} from 'react-router-dom'

export default function sidebar() {
    return (
        <div>
            <div className="w-full h-screen items-center bg-gray-900 bg-opacity-100 shadow px-10 py-16 rounded-lg">

              <div className="w-full">
                <h1 className="lg:text-3xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Dashboard</h1>
              </div>

              <div className="flex">
                <p className="leading-7 text-2xl font-bold text-base text-left mb-8">Welcome Barath!</p>
              </div>

              <Link to="/Dashboard">
                <button className="flex pr-4 py-2 mt-4 rounded-md text-lg font-medium focus:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg> &nbsp;
                Home
                </button>
              </Link>

              <Link to="/Projects">
                <button className="flex pr-4 py-2 mt-4 rounded-md text-lg font-medium focus:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg> &nbsp;
                Projects
                </button>
              </Link>

              <Link to="/Leagues">
                <button className="flex pr-4 py-2 mt-4 rounded-md text-lg font-medium focus:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg> &nbsp;
                Leagues
                </button>
              </Link>

              <Link to="/Profile">
                <button className="flex pr-4 py-2 mt-4 rounded-md text-lg font-medium focus:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg> &nbsp;
                Profile
                </button>
              </Link>

              <button className="absolute bottom-10 font-bold px-8 py-3 rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">Sign out</button>
            </div>
        </div>
    )
}
