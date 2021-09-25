import React,{ useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Navbar from '../../components/navbar/navbar';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import web3 from '../../web3';

class Login extends React.Component{

constructor (){
  super();
  this.state = { addresses:[]};
  
}

async componentWillMount(){
  const add1 = await web3.eth.getAccounts();
  localStorage.setItem('addresses', add1);
  this.setState({addresses:add1});
}
render() {
  const add1 = this.state.addresses
  if(add1[0]!='undefined'){
    return <Redirect to="/Dashboard" />;
  }
    return (
        
        <div className="overflow-hidden text-white" >
        <div className="h-screen content-center" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
        <Navbar className="absolute"/>

        <section class="relative h-screen max-w-7xl w-full -mt-10 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
          <div class="container h-full content-center flex flex-wrap mx-auto items-center align-middle items-center ">

            <div className="w-full md:w-1/2 items-center pl-24 hidden md:block">
            </div>

            <div className="w-full md:w-1/2 items-center bg-gray-900 bg-opacity-80 shadow p-20 rounded-lg">
              <div className="w-full">
                <h1 className="lg:text-5xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Login to your account</h1>
              </div>
              
              <div className="flex">
                <p className="leading-7 text-base text-left">Kindly connect your MetaMask Wallet in order to login to your account!</p>
              </div>

              <Link to="/Dashboard">
                <button className="mt-10 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">Login via Wallet</button>
              </Link>
              <button className="mt-10 ml-4 px-2 font-bold py-3 rounded">Learn more</button>
            </div>
         
          </div>
        </section>
        </div>
        </div>
    )
 } }
  export default Login;
