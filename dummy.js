/** NodeJS example of using the 1INCH API with web3{js} */
const axios = require('axios');                         //used for getting api data, install with "yarn add axios"
const { ethers } = require('ethers');                   //full ethereum wallet written as a javascript module, documentation here: https://docs.ethers.io/v5/getting-started/

var privateKey = '0x49711e286a2f4f9d57e28a10786cfaddadce0f8b0b573a1891905c50a51b2cbd';                               //private key in hex with a leading 0x

// Sign up for a free dedicated RPC URL at https://rpc.maticvigil.com/, https://ankr.com, https://infura.io/ or other hosted node providers.
const MATICprovider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com'); //rpc can be replaced with an ETH or BSC RPC 
const wallet = new ethers.Wallet(privateKey, MATICprovider);       //connect the matic provider along with using the private key as a signer

//the URL of the tokens you may want to swap, change if the provider isn't matic
let callURL = 'https://api.1inch.exchange/v3.0/137/swap?fromTokenAddress=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&' +
    'toTokenAddress=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&' +
    'amount=10000000000000&fromAddress=' +
    wallet.address +
    '&slippage=1';

/**
 * The driver of the program, this will execute anything you put in it
 */
async function driver() {

    // only tokens need approval, MATIC does not
    //begin token approval
    if (!(callURL.substring(callURL.indexOf("fromTokenAddress=") + 17, callURL.indexOf("fromTokenAddress=") + 59) === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')) //check if this is not the native token
    {
        nonce = await wallet.getTransactionCount() + 1;
        globalData = await approveApiCaller(number_of_tokens_in_wei, address, nonce)
        console.log(globalData);
        try {
            await wallet.sendTransaction(globalData["tx"]).then(
                (data) => {                                 //catch any errors
                    console.log(data);
                }
            );                                              //send the transaction
            console.log("Approval success");
        } catch (e) {
            console.log("Approval failure");
        }
    }//end token approval

    //begin api call and transaction sending
    nonce = await wallet.getTransactionCount() + 1;
    globalData = await apiCaller(callURL, nonce);       //call the api to get the data, and wait until it returns
    //console.log(globalData["tx"]);                    //log the data
    try {
        await wallet.sendTransaction(globalData["tx"]).then(
            (data) => {                                 //catch any errors
                console.log(data);
            }
        );                                              //send the transaction
        console.log("Transaction success");
    } catch (e) {
        console.log("Transaction failure");
    }
    //end api call and transaction sending
    process.exit(0);                                    //exit with code 0
}