import React, { Component, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Leagues from '../../deployedContracts/Leagues'
import web3 from "../../web3"


// const endLeague = async() =>{
//   if(!loading){
//     setloading(true);
//     try {
      
//       let accounts = await web3.eth.getAccounts();
//       let organization=accounts[0];

//       console.log('entryFee',entryFee, 'max players:', maxPlay)
//       await knitts.methods.endLeague().send( {from:organization, gas:gasfee});
//       let numLeagues = await knitts.methods.numLeagues().call();
//       let leagueAddress = await knitts.methods.Leagues(numLeagues-1).call();
//       console.log("league address:",leagueAddress);
//       var league = await League(leagueAddress);
//       console.log('league details:', 'entryFee', await league.methods.entryFee().call(), 'duration:', await league.methods.duration().call(), 'deposit:', await league.methods.deposit().call());
//       history.push('/Leagues');

//     } catch (error) {
//       setErrorMessage(error.message);
//       console.log(error);
//       setloading(false);
//       setError(true);
//     }
//   }
// }

export default function Index() {

  const [loading,setloading] = useState(false)

  const location = useLocation()
  var { leagueAdd } = location.state
  // leagueAdd = leagueAdd['leagueAdd']
  console.log(leagueAdd);
  let [projects, setProjects] = useState([0]);
  useEffect( async () => {
    leagueAdd = leagueAdd['leagueAdd']
    console.log('leagueAdd', leagueAdd);
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let league = await Leagues(leagueAdd);
    console.log('league', await league.options.address)
    let _projects = []
    let numProjects = await league.methods.numProjects().call();
    for(let i=0; i<numProjects;i++){
      _projects.push(await league.methods.submissionDetails(i).call());
    }
    console.log('projects', _projects);

    setProjects(_projects);
  }, [])

  const endLeague = async () => {
    if(!loading){
      setloading(true);
        if(!loading){
          leagueAdd = leagueAdd['leagueAdd']
          let league = await Leagues(leagueAdd);
          console.log('leagueAdd', leagueAdd);
           
          const accounts = await web3.eth.getAccounts();


          await league.methods.endLeague().send({ from: accounts[0] , gasLimit: 5e7});

          let points = await league.methods.points(0).call()
          // let points = await league.methods.endLeague().call({ from: accounts[0] });
          console.log('points',points);
          console.log('Done');
        }
    }
  }

  return (
    
    <>
    <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./login_bg1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}} >
    <div className="h-screen content-center" >
      
      <Navbar className="absolute"/>     
      <section class="relative max-w-7xl w-full mt-16 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
          <div class="container max-w-6xl mx-auto">
              <h2 class="text-4xl font-bold tracking-tight text-center">Projects submitted to this League are shown below</h2>

              <div className="flex w-full justify-center">
              <button className="mt-10 px-8 py-3 rounded font-extrabold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500" onClick={endLeague}>
              <svg class={loading ? "animate-spin h-5 w-5 mr-3 border-t-2 border-bg-white rounded-full" : "hidden"} viewBox="0 0 24 24">
              </svg>
              <div className={loading? "hidden" : ""}>
                End League
              </div>
              </button>
              </div>
              <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
                
              {projects.map(function(project, index){
                  return(
                    <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                      <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                      </div>
                      <Link 
                      to={{
                        pathname: '/projectView',
                        state: {
                          leagueAdd: {leagueAdd},
                          projectId: {index}
                         }
                      }}
                      >
                      <h4 class="text-xl font-bold text-white">{project[0]}</h4>
                      </Link>
                     </button>
                  )
                  
                })}

                  
                  <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                      <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                      </div>
                      <Link to="/ProjectView">
                      <h4 class="text-xl font-bold text-white">Coinfantasy</h4>
                      </Link>
                  </button>
     

                  <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                      <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                      </div>
                      <h4 class="text-xl font-bold text-white">Darksight</h4>
                  </button>

                  
                  
                  <Link to={{
                        pathname: "/CreateProject",
                        state: {
                          leagueAdd: {leagueAdd}
                         }
                      }}
                 
                  class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 overflow-hidden bg-indigo-900 sm:rounded-xl">
                  <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-indigo-900 sm:rounded-xl">
                      <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                      </div>
                      <h4 class="text-xl font-bold text-white">Submit a Project</h4>
                  </button>
                  </Link>

              </div>
          </div>
      </section>
    </div>
    </div>
      
    </>
    )
}