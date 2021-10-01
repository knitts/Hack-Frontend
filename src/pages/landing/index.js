import React,{ useState } from 'react'
import Navbar from '../../components/navbar/navbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import working_1 from "../../assets/working_1.png";
import working_2 from "../../assets/working_2.png";
import working_3 from "../../assets/working_3.png";

function LandingPage() {
    return (
        <div className="overflow-hidden text-white" >
        <div className="h-screen content-center" style={{"backgroundImage":"url('./bg_1.jpg')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
        <Navbar className="absolute"/>

        <section class="relative max-w-7xl w-full lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
          <div class="container h-full content-center flex flex-wrap mx-auto items-center align-middle items-center ">
            
            <div className="w-full md:w-3/5 items-center bg-gray-900 bg-opacity-80 shadow p-20 rounded-lg">
              <div className="w-full">
                <h1 className="lg:text-5xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Fantasy Projects</h1>
              </div>
              <div className="flex">
                <p className="leading-7 text-base text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna pellentesque dictumst mi convallis eu at non.Magna pellentesque dictumst mi convallis eu at non.
                </p>
              </div>
              <button className="mt-10 px-8 py-3 font-bold rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">Get Started</button>
            </div>
            <div className="w-full md:w-2/5 items-center pl-24 hidden md:block">
                <Player
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/packages/lf20_plmj7rpe.json"
                  // style={{ height: '400px', width: '400px' }}
                  >
                </Player>
            </div>
          </div>
        </section>
        </div>

        <div className="relative bg-gray-900">
        <section class="relative max-w-7xl w-full lg:w-4/5 mx-auto px-6 pb-12 text-gray-900 body-font" >
          <div class="container flex flex-wrap pt-32 pb-24 mx-auto items-center justify-center">
            <div class="flex flex-col text-center w-full lg:mb-20" >
                <h1 className="sm:text-3xl text-2xl lg:text-5xl text-xl font-extrabold leading-tight text-transparent py-8 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">How does the League work?</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit vivamus pellentesque nec ut tortor tristique eu pellentesque vitae.
                    Sit et at egestas dictum augue mattis est nunc.
                </p>
                
                <div class="flex flex-wrap justify-center pt-16 text-white" >

                    <div class="flex-col w-full lg:w-1/4 items-center justify-center px-4 pt-6 sm:rounded-xl">
                        <div class=" text-heading-blue rounded-lg mb-8 rounded-lg flex justify-center shadow-lg">
                          <img src={working_1} className="rounded-xl shadow-lg"></img>
                        </div>
                        <h4 class="text-xl font-extrabold text-white">Moderator Starts a League</h4>
                    </div>

                    <hr class="hidden lg:block flex-col w-1/12 align-center relative top-28 items-center border-t border-heading-blue justify-center  px-4 py-12 "/>

                    <div class="flex-col w-full lg:w-1/4  items-center justify-center px-4 pt-6 sm:rounded-xl">
                        <div class=" text-heading-blue rounded-lg mb-8 rounded-lg flex justify-center shadow-lg">
                            <img src={working_2} className="rounded-xl shadow-lg"></img>
                        </div>
                        <h4 class="text-xl font-extrabold text-white">Devs join the league and funding battle starts!</h4>
                    </div>
                    
                    <hr class="hidden lg:block flex-col w-1/12 align-center relative top-28 items-center border-t border-heading-blue justify-center px-4 py-8 "/>

                    <div class="flex-col w-full lg:w-1/4 items-center justify-center px-4 pt-6 sm:rounded-xl">
                        <div class=" text-heading-blue rounded-lg mb-8 rounded-lg flex justify-center shadow-lg">
                            <img src={working_3} className="rounded-xl shadow-lg"></img>
                        </div>
                        <h4 class="text-xl font-extrabold text-white">Quadratic Funding for win!</h4>
                    </div>
                </div>
            </div>
                
          </div>
        </section>
        </div>
        
        {/* Section 3 */}
        <section class="relative bg-gray-900 pt-10 pb-20">
          <div class="relative max-w-7xl bg-gray-800 rounded-lg w-full lg:w-4/5 px-6 py-12 text-gray-600 body-font relative container flex flex-wrap mx-auto items-center">
            
            <div class="flex flex-col md:w-1/2 md:px-10 pl-10 py-10">
              <img src="./hero-2.png" className="rounded-lg shadow-xl"></img>
            </div>

            <div className="flex flex-col justify-start w-full md:w-1/2 px-10">
                <h1 className="lg:text-5xl text-xl font-extrabold leading-tight text-transparent mb-2 pb-6 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-left">Why are we building Fantasy Projects?</h1>
                <p className="leading-7 text-base text-left text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui porttitor urna, sed venenatis massa volutpat lacus eget pharetra. Nibh sit fusce libero amet at blandit dignissim cursus suspendisse.
                </p>
                <button className="w-2/5 mt-4 px-4 py-4 text-white font-extrabold rounded bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">Learn More</button>
             </div>
            
          </div>
        </section>

        <div className="relative bg-gray-900">
        <section class="relative max-w-7xl w-full lg:w-4/5 mx-auto px-6 pb-6 text-white body-font">
          <div class="container flex flex-wrap pt-20 pb-24 mx-auto">

            <div className="pt-8 flex flex-col justify-start w-full md:w-full">
                <h1 className="lg:text-5xl text-xl font-extrabold leading-tight text-transparent py-8 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-left">See what our users are saying about us</h1>
            </div>

            <section class="flex items-center justify-center py-16 pb-10">
                <div class="px-16">
                    <div class="container flex flex-col items-start mx-auto lg:items-center">

                        <div class="items-center justify-center w-full mt-6 mb-4 lg:flex">
                            
                            <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                                <div class="flex items-center justify-center">

                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    </div>

                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-white">ABC</h4>
                                        <p class="text-gray-600">Blockchain expert, 1inch</p>
                                    </div>

                                </div>
                                <p class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much easier. Thanks for making such a great product."</p>
                            </div>
                            
                            <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    </div>
                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-white">BAC</h4>
                                        <p class="text-gray-600">Investor</p>
                                    </div>
                                </div>
                                <p class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much easier. Thanks for making such a great product."</p>
                            </div>
                            
                            <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                                <div class="flex items-center justify-center">
                                    <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    </div>
                                    <div class="flex flex-col items-start justify-center">
                                        <h4 class="font-bold text-white">CBA</h4>
                                        <p class="text-gray-600">Developer, Illuminati</p>
                                    </div>
                                </div>
                                <p class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much easier. Thanks for making such a great product."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


          </div>
        </section>
        </div>

        <section class="relative bg-gradient-to-r from-green-400 to-blue-500 pt-16">
          <div class="container flex  max-w-7xl w-full lg:w-4/5 mx-auto px-6 body-font py-8 leading-7 text-gray-900 sm:py-12 md:py-16 lg:py-0 z-20 justify-between px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            
            <div class="w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {/* <img
                    className="h-12 w-12"
                    src="./logo.svg"
                    alt="logo"
                  /> */}
                <span class="title-font text-3xl text-black tracking-widest font-extrabold text-sm mb-3">Project Fantasy</span>
              </a>
              <p class="title-font text-xl text-black text-sm mb-3">NextGen Projects for the win!</p>
            </div>
            
            <div class=" w-2/3 md:mx-0 mx-auto flex md:pl-20 md:mt-0 md:text-left text-center justify-between">
              
              <div class=" w-full md:w-full lg:w-1/3 px-4">
                <h2 class="title-font text-xl text-black tracking-widest font-extrabold text-sm mb-3">Community</h2>
                <ul class="list-none mb-10">
                  <li className="py-1">
                    <a class="text-black hover:text-black">Team Members</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Telegram Channel</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Facebook Group</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Discord Group</a>
                  </li>
                </ul>
              </div>

              <div class="lg:w-1/3 md:w-full w-full px-4">
                <h2 class="title-font text-xl text-black tracking-widest font-extrabold text-sm mb-3">About Us</h2>
                <ul class="list-none mb-10">
                  <li className="py-1">
                    <a class="text-black hover:text-black">Meet the Team</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Our Story</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">FAQ</a>
                  </li>
                </ul>
              </div>

              <div class="lg:w-1/3 md:w-full w-full px-4">
                <h2 class="title-font text-xl text-black tracking-widest font-extrabold text-sm mb-3">Useful Links</h2>
                <ul class="list-none mb-10">
                  <li className="py-1">
                    <a class="text-black hover:text-black">1 inch</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Blockchain</a>
                  </li>
                  <li className="py-1">
                    <a class="text-black hover:text-black">Web3</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          </section>

          <div class="bg-gray-900 w-full  body-font leading-7 sm:py-12 md:py-16 lg:py-4 z-20">
            <div class="container max-w-7xl lg:w-4/5 mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p class="text-white font-bold text-sm text-center sm:text-left">© Project Fantasy 2021
                <span class="text-white font-bold ml-1" target="_blank">All rights reserved</span>
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>

          </div>
        </div>
    )
  }
  export default LandingPage;
