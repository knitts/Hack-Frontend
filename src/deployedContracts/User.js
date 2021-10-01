import web3 from '../web3';
import User from '../build/contracts/User.json';

function instance(address) {
    return new web3.eth.Contract(
    User.abi,
	//address of crowdly here
	address
    );
}
export default instance;