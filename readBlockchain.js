const {ethers} = require("ethers");
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/4d7a132eea0641a39aca7098e4904141`);

const queryBLockchain= async()=>{
    const block=await provider.getBlockNumber();
    console.log(`Current block Number: ${block}`);

    const balance=await provider.getBalance("0xd7A43c5b7fb296134B43B41d09cA86b338a96C46");
    console.log("Account balance in Big Number:",balance);

    const balanceEther=ethers.formatEther(balance);
    console.log("Account balance in Ether:",balanceEther);

    const balanceWei = ethers.parseEther(balanceEther);
    console.log(balanceWei);
}

queryBLockchain();