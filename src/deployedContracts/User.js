import web3 from '../web3';
import User from '../build/contracts/User.json';

function instance(contractAddress='0x0000000000000000000000000000000000000000', userAddress = '0x0000000000000000000000000000000000000000') {
    if(contractAddress != '0x0000000000000000000000000000000000000000'){
        return new web3.eth.Contract(
            User.abi,
            contractAddress
            );
    }else{
            var user =  (new web3.eth.Contract(User.abi));
            return user.deploy({data:User.bytecode, arguments: [userAddress, "Arvinth"]}).send({from:userAddress});
    }
    
}
export default instance;