const ethers = require('ethers');
require('dotenv').config();

let provider = ethers.getDefaultProvider('kovan');
//console.log(provider);

let wallet1 = new ethers.Wallet(process.env.pk, provider);
//console.log(wallet1);

let contractInfo = require('../build/contracts/lab3');
console.log(contractInfo);
let ABI = contractInfo.abiDefinition;
//console.log(ABI);

let bytcode = contractInfo.code;
//console.log(bytcode);

let cf = new ethers.ContractFactory(ABI, bytcode, wallet1);
async function deployment() {
    let main = await cf.deploy();
    await main.deployed();
    console.log(main);
}
deployment();

