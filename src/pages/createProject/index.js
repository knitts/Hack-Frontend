import React,{ useState } from 'react'
import {Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar';
import web3 from '../../web3'
import Leagues from '../../deployedContracts/Leagues'
import { useHistory } from "react-router-dom";

export default function Index() {

  const location = useLocation()
  const { leagueAdd } = location.state
  // console.log(leagueAdd['leagueAdd']);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [loading,setloading] = useState(false)
  const [error,setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  let history = useHistory();


  function convert2Bytes(sentence, limit=20){
    var n = sentence.length;
    var res = []
    for(let i=0; i<n; i++){
        let l = sentence[i].length;
        let word = sentence[i] + (" ".repeat(limit-l));
        res.push(web3.utils.hexToBytes('0x'+Buffer.from(word, 'utf8').toString('hex')));
    }
    return res;
}
  
  const CreateProject = async() =>{
    if(!loading){
      setloading(true);
      try {
        let accounts = await web3.eth.getAccounts();
        console.log('leagueAdd', leagueAdd['leagueAdd']);
        let league = await Leagues(leagueAdd['leagueAdd']);
        console.log('league', await league.options.address)
        
        let sentence = ["OM", 'NAMO', 'NARAYANA'];
        let description = convert2Bytes(sentence, 20);
        let entryFee = await league.methods.entryFee().call();
        console.log('description', description);
        await league.methods.submitIdea(title, url, image, description).send({from: accounts[0], value: entryFee, gas:1e7});

       
        // history.push('/League2');

      } catch (error) {
        setErrorMessage(error.message);
        console.log(error);
        setloading(false);
        setError(true);
      }
    }
  }











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
            <input value={title} onChange={e => setTitle(e.target.value)} className="mt-8 my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter your project name"/>
            <textarea className="my-2 p-3 pb-16 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter your project description"/>
            <input value={url} onChange={e => setUrl(e.target.value)} className="my-2 p-3 w-full bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter project link"/>
            <button onClick={CreateProject} className="mt-4 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              <svg class={loading ? "animate-spin h-5 w-5 mr-3 border-t-2 border-bg-white rounded-full" : "hidden"} viewBox="0 0 24 24">
              </svg>
              <div className={loading? "hidden" : ""}>
                Submit Project
              </div>
              </button>
          </div>
        
        </div>
      </section>
      </div>
      </div>
    )
}
