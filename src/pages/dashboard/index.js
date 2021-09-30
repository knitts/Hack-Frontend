import React,{ useState } from 'react'
import Navbar from '../../components/navbar/navbar';

import dollar from "../../assets/dollar.png";
import web3 from '../../web3'

function Dashboard() {
    return (
        // <div className="overflow-hidden text-white" >
        // <div className="h-screen content-center" style={{"backgroundImage":"url('./dashboard_bg.png')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>

        // <section class="w-screen mx-auto text-gray-100 body-font ">
        //   <div class="flex flex-wrap container mx-auto space-x-3">

        //     <Sidebar className="w-1/6"/>

        //     <div class="mt-12 w-1/2 h-1/2 pl-4">
        //       <h1 className="text-2xl font-bold text-white">Good Morning!</h1>

        //       <div class="w-full h-1/2">
        //       <div className="flex h-2/6 w-3/3 mt-4">
        //         <div className="my-2 mr-2 p-4 w-1/2 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <img src={dollar} className="w-2/12 mb-5"/>
        //           <h1 className="text-xl font-bold text-white">Funding Received</h1>
        //           <h1 className="mt-2 mb-2 text-xl font-bold text-white">$1000</h1>
        //         </div>
        //         <div className="flex my-2 ml-2 p-4 w-1/2 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <div className="my-2 mr-4 p-4 w-1/2 rounded-lg shadow-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 filter blug-lg opacity-80 pt-14">
        //             <h1 className="text-xl font-bold text-center text-white align-middle">Your Rank</h1>
        //             <h1 className="mt-3 mb-2 text-xl text-center font-bold text-white">1</h1>
        //           </div>
        //           <div className="my-2 mr-2 p-4 w-1/2 rounded-lg shadow-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 filter blug-lg opacity-80 pt-14">
        //             <h1 className="text-xl font-bold text-center text-white align-middle">Your Projects</h1>
        //             <h1 className="mt-3 mb-2 text-xl text-center font-bold text-white">5</h1>
        //           </div>
        //         </div>
        //       </div>
        //       </div>

        //       <div class="w-full h-1/2">
        //       <h1 className="pt-8 text-2xl font-bold text-white">Recent Investors</h1>

        //       <div className="flex h-2/6 w-full mt-4">
        //         <div className="relative flex my-2 mr-2 p-8 w-full rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <h1 className="text-xl font-bold text-white py-2">Thrishik</h1>
        //           <h1 className="ml-60 text-md font-bold text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 opacity-80 rounded align-middle">Neuralink</h1>
        //           <h1 className="absolute right-5 text-xl font-bold text-white py-2">$9999000</h1>
        //         </div>
        //       </div>

        //       <div className="flex h-2/6 w-full">
        //         <div className="relative flex my-2 mr-2 p-8 w-full rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <h1 className="text-xl font-bold text-white py-2">Arvinth</h1>
        //           <h1 className="ml-60 text-md font-bold text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-2 opacity-80 rounded align-middle">Neuralink</h1>
        //           <h1 className="absolute right-5 text-xl py-2 font-bold text-white">$Samiyar_Sothu_Is_Infinite</h1>
        //         </div>
        //       </div>
        //       </div>

        //     </div>

        //     <div class="mt-12 w-1/6 h-1/2">
        //     <h1 className="text-2xl font-bold text-white">Your Projects</h1>
        //       <div className="flex flex-nowrap h-2/6 w-2/3 mt-4 space-x-2">
        //         <div className="my-2 p-4 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Spider</h1>
        //         </div>
        //         <div className="my-2 p-4 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Hyperloop</h1>
        //         </div>
        //         <div className="my-2 p-4 rounded-lg shadow-lg bg-gray-900 bg-opacity-80 filter blug-lg">
        //           <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Neuralink</h1>
        //         </div>
        //       </div>
        //     </div>
            
        //   </div>

        // </section>
        // </div>
        // </div>
        <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./bg_1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}} >
        <div className="h-screen content-center" >
          <Navbar className="absolute"/>     
          <section class="relative max-w-7xl w-full mt-16 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
              <div class="container max-w-6xl mx-auto">
                  <h2 class="text-4xl font-bold tracking-tight text-center">Leagues</h2>
                  <p class="mt-2 text-lg text-center text-white">Check out our list of awesome leagues below.</p>
                  <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">League 1</h4>
                      </button>

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">League 2</h4>
                      </button>

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">League 3</h4>
                      </button>

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">League 4</h4>
                      </button>

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">League 5</h4>
                      </button>

                      <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-indigo-900 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">Create a new League</h4>
                      </button>

                  </div>
              </div>
          </section>
        </div>
        </div>
    )
  }
  export default Dashboard;
