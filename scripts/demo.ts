import hre, { ethers } from "hardhat";

async function main() {
  const url = "http://127.0.0.18545/";
  const provider = new ethers.JsonRpcProvider(url);

  // const provider = ethers.provider;

  //const signer = await provider.getSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  const [signer] = await ethers.getSigners();
  console.log(signer);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })