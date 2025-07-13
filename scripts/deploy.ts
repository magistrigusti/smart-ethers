import hre, { ethers } from "hardhat";

async function main() {
  // const [ signer ] = await ethers.getSigners();

  // const Factory = await ethers.getContractFactory("Demo");

  const signer = (await ethers.getSigners())[1];

  const Factory = await ethers.getContractFactory("Demo", signer);
  const demo = await Factory.deploy(await signer.getAddress());
  await demo.waitForDeployment();

  console.log(demo);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })