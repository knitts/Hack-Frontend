import React,{ useStatem, useEffect, useState} from 'react'
import {Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import web3 from '../../web3';
import Leagues from '../../deployedContracts/Leagues'
import { useHistory } from "react-router-dom";

function convert2String(bytes){
  let res = ""
  let n = bytes.length;
  for(let i=0; i<n; i++){
      res += Buffer.from(bytes[i], 'hex').toString('utf8');
  }
  return res;
}

export default function Index() {
  const location = useLocation()
  var { leagueAdd, projectId } = location.state
  leagueAdd = leagueAdd['leagueAdd']['leagueAdd']
  console.log('leagueAdd', leagueAdd, 'projectId', projectId);
  projectId = projectId['index'];
  const [amount, setAmount] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [owner, setOwner] = useState("");
  
  const [isEnded, setIsEnded] = useState(false);
  const [points, setPoints] = useState(0);
  const [investorCount, setInvestorCount] = useState(0);
  const [totalFund, setTotalFund] = useState(0);


  const [sentence, setSentence] = useState([]);
  const [title, setTitle] = useState([]);

  const [loading,setloading] = useState(false)
  const [error,setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  let accounts, organization, league;
  let description;
  let history = useHistory();

  useEffect( async () => {
    accounts = await web3.eth.getAccounts();
    organization=accounts[0];
    console.log('leagueAdd', leagueAdd);
    console.log(accounts);
    league = await Leagues(leagueAdd);
    console.log('league', await league.options.address)
    console.log('projectId', projectId, 'amount', amount);
    let _project = await league.methods.submissionDetails(projectId).call();
    setTitle(_project[0]);
    setUrl(_project[1]);
    setImage(_project[2]);
    setOwner(_project[3]);
    setInvestorCount(_project[5]);
    setTotalFund(_project[6]);
    
    
    let _ended = await league.methods.ended().call();
    setIsEnded(_ended);
    console.log('ended',_ended);

    if(_ended){
      let _points = await league.methods.points(projectId).call();
      console.log("points",_points);
      setPoints(_points);
    }

    console.log('title', title);
    description = _project[4];
    console.log('project details', _project, 'description', description);
    setSentence(convert2String(description));
    console.log('sentence', sentence);
  })

  
  const InvestHere = async() =>{
    if(!loading){
      setloading(true);
      try {
        
        await league.methods.invest(projectId).send({from:accounts[0], value:web3.utils.toWei(amount, 'ether'), gasLimit: 5e7});
       
        history.push({
          pathname: '/league1',
          state: {
            leagueAdd: {leagueAdd}
           }
        });

      } catch (error) {
        setErrorMessage(error.message);
        console.log(error);
        setloading(false);
        setError(true);
      }
    }
  }


  return (
      
      <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
      <div className="h-screen content-center">
      <Navbar className="absolute"/>

      <section class="relative max-w-7xl w-full mt-10 pb-20 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
        <div class="container h-full content-center flex flex-wrap mx-auto items-center justify-center align-middle items-center ">

          <div className="flex flex-wrap justify-center w-full md:w-full mt-16 items-center bg-gray-900 bg-opacity-80 shadow px-20 pt-16 pb-20 rounded-lg">
            
            <div className="w-full">
              <h1 className="lg:text-5xl text-xl font-extrabold mb-4 leading-tight text-heading-blue text-center">{title}</h1>
            </div>
            
            <div className="w-full">
              <p className="leading-7 text-base font-bold text-center my-6">{sentence}</p>
            </div>

            <div className="w-full">
              <a href={url}>
              <p className="leading-7 text-base font-bold text-center my-2">{url}</p>
              </a>
            </div>


            <div className="w-full flex justify-center">
              <img src="./bg.jpg" className="w-5/6 m-4 rounded-lg"/>
            </div>

            {/* <Link to="/Dashboard"> */}
            <div className={isEnded ? "hidden" : "mt-8"}>  
              <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className="p-3 px-8 mr-4 border border-bg-white bg-gray-900 rounded text-white placeholder-gray-300" placeholder="Enter ETH to invest"/>
              <button onClick={InvestHere} className="mt-4 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
              <svg class={loading ? "animate-spin h-5 w-5 mr-3 border-t-2 border-bg-white rounded-full" : "hidden"} viewBox="0 0 24 24">
              </svg>
              <div className={loading? "hidden" : ""}>
                Invest
              </div>
              </button>
            </div>
            {/* </Link> */}
            <div className={isEnded ? "w-full text-left" : "hidden"}>
              <p className="leading-7 text-base font-bold px-12 my-6">Total points obtained: {points}</p>
              <p className="leading-7 text-base font-bold px-12 my-6">Total amount invested in league stage: {totalFund}</p>
              <p className="leading-7 text-base font-bold px-12 my-6">Total number of Investors: {investorCount}</p>
            </div>

          </div>
        
        </div>
      </section>
      </div>
      </div>
    )
}
