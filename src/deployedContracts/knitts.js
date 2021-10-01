import web3 from '../web3';
import Knitts from '../build/contracts/Knitts.json';
import address from './address.json';

const instance = new web3.eth.Contract(
	Knitts.abi,
	address.knitts,
);
export default instance;