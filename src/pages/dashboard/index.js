import React,{ useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar';

import dollar from "../../assets/dollar.png";
import web3 from '../../web3';
class Dashboard extends React.Component{
  constructor (){
    super();
    this.state = { addresses:[]};
    
  } 

  async componentWillMount(){
    const add1 = await web3.eth.getAccounts();
    localStorage.setItem('addresses', add1);
    this.setState({addresses:add1});
  }
  render(){
    return (
        <div className="overflow-hidden text-white" >
        <div className="h-screen content-center" style={{"backgroundImage":"url('./bg1.jpg')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>

        <section class="w-screen mx-auto text-gray-100 body-font ">
          <div class="flex flex-wrap container mx-auto space-x-3">

            <Sidebar className="w-1/6"/>

            <div class="mt-12 w-1/2 h-1/2">
              <h1 className="text-2xl font-bold text-white">Address: {this.state.addresses[0]}</h1>

              <div class="w-full h-1/2">
              <div className="flex h-2/6 w-3/3 mt-4">
                <div className="my-2 mr-2 p-4 w-1/2 rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <img src={dollar} className="w-2/12 mb-5"/>
                  <h1 className="text-xl font-bold text-white">Funding Received</h1>
                  <h1 className="mt-2 mb-2 text-xl font-bold text-white">$1000</h1>
                </div>
                <div className="flex my-2 ml-2 p-4 w-1/2 rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <div className="my-2 mr-4 p-4 w-1/2 rounded-lg shadow-lg bg-white filter blug-lg pt-12">
                    <h1 className="text-2xl font-bold text-center text-blue-800 align-middle">Your Rank</h1>
                    <h1 className="mt-3 mb-2 text-2xl text-center font-bold text-blue-800">1</h1>
                  </div>
                  <div className="my-2 mr-2 p-4 w-1/2 rounded-lg shadow-lg bg-white filter blug-lg pt-8">
                    <h1 className="text-2xl font-bold text-center text-blue-800">Your Projects</h1>
                    <h1 className="mt-3 mb-2 text-2xl text-center font-bold text-blue-800">5</h1>
                  </div>
                </div>
              </div>
              </div>

              <div class="w-full h-1/2">
              <h1 className="pt-8 text-2xl font-bold text-white">Recent Investors</h1>

              <div className="flex h-2/6 w-full mt-4">
                <div className="relative flex my-2 mr-2 p-8 w-full rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <h1 className="text-xl font-bold text-white py-2">Thrishik</h1>
                  <h1 className="ml-60 text-xl font-bold text-black bg-white p-2 rounded align-middle">Neuralink</h1>
                  <h1 className="absolute right-5 text-xl font-bold text-white py-2">$9999000</h1>
                </div>
              </div>

              <div className="flex h-2/6 w-full">
                <div className="relative flex my-2 mr-2 p-8 w-full rounded-lg shadow-lg bg-purple-900  filter blug-lg">
                  <h1 className="text-xl font-bold text-white py-2">Arvinth</h1>
                  <h1 className="ml-60 text-xl font-bold text-black bg-white p-2 rounded align-middle">Neuralink</h1>
                  <h1 className="absolute right-5 text-xl font-bold py-2 text-white">$Samiyar_Sothu_Is_Infinite</h1>
                </div>
              </div>
              </div>

            </div>

            <div class="mt-12 w-1/6 h-1/2">
            <h1 className="text-2xl font-bold text-white">Your Projects</h1>
              <div className="flex flex-nowrap h-2/6 w-2/3 mt-4 space-x-2">
                <div className="my-2 p-4 rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Spider</h1>
                </div>
                <div className="my-2 p-4 rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Hyperloop</h1>
                </div>
                <div className="my-2 p-4 rounded-lg shadow-lg bg-purple-900 filter blug-lg">
                  <h1 className="text-xl font-bold text-white bg-transparent bg-opacity-60 rounded-lg filter blug-lg p-4">Neuralink</h1>
                </div>
              </div>
            </div>
            
          </div>

        </section>
        </div>
        </div>
    )
  }}

  export default Dashboard;
