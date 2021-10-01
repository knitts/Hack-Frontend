import React,{ useState ,useEffect } from 'react'
import Navbar from '../../components/navbar/navbar'
import Modal from '../../components/modal/modal'
import web3 from '../../web3'
import knitts from '../../deployedContracts/knitts'
import User from '../../deployedContracts/User'

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [contractAddress, setcontractAddress] = useState("");

  useEffect( async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log('knitts', await knitts.options.address);
    
    let userAddress = await knitts.methods.getUserContractAddress(accounts[0]).call({from: accounts[0]});

    if(userAddress == null){
      await knitts.methods.register("Arvinth").send({from: accounts[0]});
      userAddress = await knitts.methods.getUserContractAddress(accounts[0]).call({from: accounts[0]});
    }
    console.log('user address: ', userAddress);
    let userDetails = await User(userAddress)
    setcontractAddress(userAddress);
    // console.log('contract Address:',contractAddress);
  }, [])

    return (
        <div className="overflow-x-hidden text-white" style={{"backgroundImage":"url('./bg_1.jpg')","backgroundPosition":"fixed","backgroundSize":"cover","backgroundRepeat":"no-repeat"}} >
        <div className="h-screen content-center" >
          <Navbar className="absolute"/>     
          <section class="relative max-w-7xl w-full mt-16 lg:w-4/5 mx-auto px-6 text-gray-100 body-font ">
              <div class="container max-w-6xl mx-auto">
                  <h2 class="text-4xl font-bold tracking-tight text-left">Welcome Name!</h2>
                  <p class="mt-2 text-lg text-left font-bold text-white">Check out your projects which you have submitted</p>
                  <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                      <button onClick={() => setIsOpen(true)} class="relative flex flex-col shadow bg-opacity-90 shadow items-center justify-between col-span-4 px-8 py-12 overflow-hidden bg-gray-800 sm:rounded-xl">
                          <div class="p-3 mb-6 text-white bg-blue-500 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                            </svg>
                          </div>
                          <h4 class="text-xl font-bold text-white">Project 1</h4>
                      </button>
                      <Modal opened={isOpen} ProjectTitle={"abc"} ProjectDesc={"abc"} ProjectURL={"abc"} ProjectFunds={"abc"} ProjectPoints={"abc"} LeagueAvg={"abc"} LeagueAddr={"abc"} />

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

                  </div>
              </div>
          </section>
        </div>
        </div>
    )
  }
  export default Dashboard;
