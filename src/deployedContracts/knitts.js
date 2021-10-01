import web3 from '../web3';
import Knitts from '../build/contracts/Knitts.json';
import address from './address.json';

const instance = new web3.eth.Contract(
	Knitts.abi,
	//address of crowdly here
	'0x308DDA7a3A9bcb3A0547d84B1bB052DB5d8148fb'
);
export default instance;