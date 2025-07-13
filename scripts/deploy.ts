import hre, { ethers } from "hardhat";

async function main() {
  console.log("DEPLOYING...");

  const [deployer] = await ethers.getSigners();

  const Demo = await ethers.getContractFactory("Demo", deployer);
  const demo = await Demo.deploy(deployer.address);
  await demo.waitForDeployment();

  console.log(`Deployed to ${await demo.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});