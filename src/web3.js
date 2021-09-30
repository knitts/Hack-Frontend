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


export default web3;