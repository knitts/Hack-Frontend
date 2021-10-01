//OM NAMO NARAYANA
import web3 from '../web3';
import knitts from '../build/contracts/Knitts.json';

export default (address) => {
    return new web3.eth.Contract(
        knitts.abi,
        address
    );

}