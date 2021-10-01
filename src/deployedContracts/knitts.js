import web3 from '../web3';
import Knitts from '../build/contracts/Knitts.json';

const instance = new web3.eth.Contract(
	Knitts.abi,
	//address of crowdly here
	'0x479a23D67b2903bD2947778AC5F5921aac129263'
);
export default instance;