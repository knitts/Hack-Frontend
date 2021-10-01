import web3 from '../web3';
import League from '../build/contracts/League.json';

function instance(address) {
    return new web3.eth.Contract(
    League.abi,
	//address of crowdly here
	address
    );
}
export default instance;