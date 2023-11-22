
import {useEffect} from "react";
const {ethers}=require("ethers");



function App() {
  const walletAddress="0x374799d84e53651f5F6039A44b8FcC0dFa8F03F7";
  
  useEffect(()=>{
    const walletAbi=[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEthContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEthUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    const writeContract = async()=>{
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);
      const signer=await provider.getSigner();
      const contract = new ethers.Contract(walletAddress,walletAbi,signer);
      // await contract.setValue(2);
      // await contract.sendEthContract({value:ethers.parseEther("0.001")});
      // await contract.sendEthUser("0xBf64D85326a040DccF342bbA38fE5facAA73bdB2",{value:ethers.parseEther("0.0001")});
       console.log(signer);
    } 
    writeContract();
  },[])
 
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
