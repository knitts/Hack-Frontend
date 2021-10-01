import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../../components/navbar/navbar';
import web3 from '../../web3'


import Knitts from '../../deployedContracts/knitts'
const League= require("../../build/contracts/League.json");
var gasfee = 5e6;

export default function Index() {
  const [name, setName] = useState("");
  const [entryFee, setEntryFee] = useState(0);
  const [maxPlay, setMaxPlay] = useState(0);
  const [dur,setDuration]=useState(0);

  
  const createLeague = async() =>{
    let accounts = await web3.eth.getAccounts();
    let moderator = accounts[0];
    let organization=accounts[0];
    let knitts= Knitts;
    
    await knitts.methods.addModerator().send({from: moderator, value:web3.utils.toWei('1', 'ether'), gas: gasfee});
    await knitts.methods.createLeague(web3.utils.toWei(entryFee, 'ether'), maxPlay, dur).send( {from:moderator , gas: gasfee});
    var leagueAddress = await knitts.methods.createLeague(web3.utils.toWei(entryFee, 'ether'), maxPlay, dur).call( {from:moderator});
    var league = await new web3.eth.Contract(League.abi, leagueAddress[0]);
    var league_details = await league.methods.getDetails().call();
    
  }
  return (
      <div className="overflow-x-hidden text-white " >
      <div className="h-screen content-center" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
      <Navbar className="absolute"/>

      <section class="relative max-w-7xl -mt-28 w-full lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
        <div class="container h-full content-center flex flex-wrap mx-auto items-center justify-center align-middle items-center ">

          <div className="w-full md:w-1/2 mt-16 items-center bg-gray-900 bg-opacity-80 shadow px-20 pt-16 pb-20 rounded-lg">
            <div className="w-full">
              <h1 className="lg:text-5xl text-xl font-extrabold mb-6 leading-tight text-heading-blue text-left">Create League</h1>
            </div>
            
            <div className="flex">
              <p className="leading-7 text-base font-bold text-left">Kindly Fill out the details!</p>
            </div>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-8 my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter League name"/>
            <input value={entryFee} onChange={e => setEntryFee(e.target.value)} className="my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" type="number" placeholder="Entry fee for registering players (in ETH)"/>
            <input value={maxPlay} onChange={e => setMaxPlay(e.target.value)} className="my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" type="number" placeholder="Max number of players allowed"/>
            <input value={dur} onChange={e => setDuration(e.target.value)} className="my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" type="number" placeholder="Duration of the League (in days)"/>
            {/* <Link to="/Dashboard"> */}
              <button onClick={createLeague} className="mt-4 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              <div>
                Create League
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
