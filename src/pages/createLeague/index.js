import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

import Navbar from '../../components/navbar/navbar';
import web3 from '../../web3'

import Alert from '../../components/alert/alert';

import knitts from '../../deployedContracts/knitts'
import League from '../../deployedContracts/Leagues'
var gasfee = 5e6;

export default function Index() {
  const [name, setName] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [maxPlay, setMaxPlay] = useState("");
  const [dur,setDuration]=useState("");

  const [loading,setloading] = useState(false)
  const [error,setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  let history = useHistory();

  
  const createLeague = async() =>{
    if(!loading){
      setloading(true);
      try {
        let accounts = await web3.eth.getAccounts();
        let moderator = accounts[0];
        let organization=accounts[0];
        
        await knitts.methods.createLeague(web3.utils.toWei(entryFee, 'ether'), maxPlay, dur).send( {from:moderator, value:web3.utils.toWei('1', 'ether') , gas: gasfee});
        var leagueAddress = await knitts.methods.createLeague(web3.utils.toWei(entryFee, 'ether'), maxPlay, dur).call( {from:moderator, value:web3.utils.toWei('1', 'ether')});
        console.log("league address:",leagueAddress);
        var league = await League(leagueAddress[leagueAddress.length-1]);
        // var league_details = await league.methods.getDetails().call();
       
        history.push('/Leagues');

      } catch (error) {
        setErrorMessage(error);
        console.log(error);
        setloading(false);
        setError(true);
      }
    }
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
              <svg class={loading ? "animate-spin h-5 w-5 mr-3 border-t-2 border-bg-white rounded-full" : "hidden"} viewBox="0 0 24 24">
              </svg>
              <div className={loading? "hidden" : ""}>
                Create League
              </div>
              </button>
            {/* </Link> */}
          </div>
        
        </div>
        <Alert message={errorMessage} isVisible={error} />
      </section>
      </div>
      </div>
    )
}
