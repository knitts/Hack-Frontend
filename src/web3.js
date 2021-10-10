import Web3 from 'web3';

let web3; 

if (window.ethereum){
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
}
else if(typeof window !=='undefined' && typeof web3 !== 'undefined')
{
    console.log('web3 available');
    web3 = new Web3(web3.currentProvider);
}else{
    
    let web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
    web3 = new Web3(web3Provider)
}

// import Portis from '@portis/web3';
// import Web3 from 'web3';

// const portis = new Portis('bc6bf960-1231-411d-83ef-2fa48e0cf1cb', 'maticMumbai');
// const web3 = new Web3(portis.provider);

export default web3;