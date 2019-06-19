const ethers = require('ethers');
require('dotenv').config();

let contractInfo = require('../build/contracts/lab3');

let provider = ethers.getDefaultProvider('kovan');
let wallet = new ethers.Wallet(process.env.pk, provider);
let contractaddress = "0xfb89838D43A811196f792364F009ae0C7564525a";
let ABI = contractInfo.abiDefinition;

Readonlycontract = new ethers.Contract(contractaddress, ABI, provider);
contractwithSigner = Readonlycontract.connect(wallet);

async function readfunction() {
    let state = await Readonlycontract.players();
    console.log(state.toString());
}
readfunction();

async function writefunction() {
    let state = await contractwithSigner.setstateopen();
    console.log(state);
}
writefunction();