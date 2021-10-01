import web3 from '../web3';
import User from '../build/contracts/User.json';

async function instance(address) {
    return await new web3.eth.Contract(
    User.abi,
	//address of crowdly here
	address
    );
}
export default instance;