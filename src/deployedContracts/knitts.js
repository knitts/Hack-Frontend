import web3 from '../web3';
import Knitts from '../build/contracts/Knitts.json';

const instance = new web3.eth.Contract(
	Knitts.abi,
	//address of crowdly here
	'0xBA5D6124C7B79FF957D688909759e5117b8d529f'
);
export default instance;