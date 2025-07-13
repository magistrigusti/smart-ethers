import hre, { ethers } from "hardhat";
import { Demo__factory } from "../typechain-types";
// import { readFile } from "fs/promises";

async function main() {
  const [signer, signer2] = await ethers.getSigners();
  const contractAddr = "0x8464135c8F25Da09e49BC8782676a84730C318bC";

  // const demo = await ethers.getContractAt("Demo", contractAddr, signer);
  
  // const artifact = JSON.parse(
  //   (await readFile("./artifacts/contracts/Demo.sol/Demo.json")).toString(),
  // );
  // const demo = new ethers.Contract(contractAddr, artifact['abi'], signer);
  const demo = Demo__factory.connect(contractAddr, signer);
  console.log(await demo.owner());

  const txData = {
    value: 100,
    to: contractAddr,
  };

  const tx = await signer.sendTransaction(txData);
  await tx.wait();

  const provider = ethers.provider;
  const addr = await signer.getAddress();
  const addr2 = await signer2.getAddress()

  console.log(`SC balance: ${ethers.formatEther(await provider.getBalance(contractAddr))} ETH`);
  console.log(`mapping: ${await demo.transfers(addr)}`);

  const txChangeOwner = await demo.changeOwner(addr2);
  await txChangeOwner.wait();

  console.log(`New owner: ${await demo.owner()}`);

  const txChangeOwner2 = await demo.changeOwner(addr);
  await txChangeOwner2.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })