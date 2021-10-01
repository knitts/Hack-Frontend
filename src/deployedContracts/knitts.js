import web3 from '../web3';
import Knitts from '../build/contracts/Knitts.json';

const instance = new web3.eth.Contract(
	Knitts.abi,
	//address of crowdly here
	'0x9D25f243aD38E54A8e11cF4C4c65B24831235684'
);
export default instance;