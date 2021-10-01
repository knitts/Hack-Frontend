import web3 from '../web3';
import League from '../build/contracts/League.json';

async function instance(address) {
    return await new web3.eth.Contract(
    League.abi,
	//address of crowdly here
	address
    );
}
export default instance;