const ethers=require("ethers");
const provider=new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/4d7a132eea0641a39aca7098e4904141`)


const walletAddress="0x374799d84e53651f5F6039A44b8FcC0dFa8F03F7";
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


const contractInteraction=async ()=>{
    const walletContract= new ethers.Contract(walletAddress,walletAbi,provider);

    const contractName= await walletContract.name();
    console.log("Contract Nanme:",contractName);

    const num=await walletContract.getValue();
    console.log(String(num));

    const contractBalance=await walletContract.contractBalance();
    const contractBalanceEth=ethers.formatEther(contractBalance);
    console.log("Contract Balance:",contractBalanceEth);

    const userBalance = await walletContract.accountBalance("0xd7A43c5b7fb296134B43B41d09cA86b338a96C46");
    console.log("User Balance:", userBalance);
    const balanceEth=ethers.formatEther(userBalance);
    console.log("User Balance in eth:", balanceEth);
}

contractInteraction();