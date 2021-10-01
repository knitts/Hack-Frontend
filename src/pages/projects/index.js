import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import web3 from "../../web3"
import Knitts from '../../deployedContracts/knitts'
import { useLocation } from 'react-router-dom'


class index extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      projects: [],
    }
    
  }
  
  
  async componentDidMount(){




    let accounts = await web3.eth.getAccounts();
    let organization = accounts[0];
    let moderator = accounts[0];
    let randomAccount = accounts[8];
    const knitts= Knitts;
    console.log(knitts);
    let res = await knitts.methods.getDetails().call();
    this.setState({projects:res[1]});
  }

  render(){
  var projects = this.state.projects;
 

export default function Index() {
  const location = useLocation()
  const { leagueAdd } = location.state
  console.log(leagueAdd);

  return (
    <>
    <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./bg_1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}} >
    <div className="h-screen content-center" >
      <Navbar className="absolute"/>     
      <section class="relative max-w-7xl w-full mt-16 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
          <div class="container max-w-6xl mx-auto">
              <h2 class="text-4xl font-bold tracking-tight text-center">projects</h2>
              <p class="mt-2 text-lg text-center text-white">Check out our list of awesome projects below.</p>
              <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
                {projects.map(function(project, index){
                    return ( 
                  <button class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                    <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                      </svg>
                    </div>
                    <h4 class="text-xl font-bold text-white">project {index+1}</h4>
                    <h8 class="text-sm text-white">{project}</h8>
                </button>);
                  })}
                
                <Link to="/CreateProject" class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 overflow-hidden bg-indigo-900 sm:rounded-xl">
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
}}

export default index;

