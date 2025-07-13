import { task, types } from "hardhat/config";
import { Demo__factory } from "../typechain-types";

task("get_owner", "Read Demo owner")
  .addParam("contract", "Contract to call")
  .addParam("signer", "Signer index")
  .setAction(async (_taskArgs, { ethers }) => {
    console.log("running task...");
    const signer = (await ethers.getSigners())[_taskArgs.signer];
    const demo = Demo__factory.connect(
      _taskArgs.contract,
      signer,
    );   
});

task("call_run", "Calls run() on Demo")
  .addParam("contract", "Contract to call")
  .addParam("value", "Amount to pay")
  .addParam("a", "Value of a")
  .addOptionalParam("signer", "Signer index", 0, types.)
  .setAction(async (taskArgs, { ethers }) => {
    const signer = (await ethers.getSigners())[taskArgs.signer];
    console.log(`Using signer ${signer.address}`);

    const demo = Demo__factory.connect(taskArgs.contract, signer);
    const tx = await demo.run(taskArgs.a, { value: taskArgs.value });
    await tx.wait();
    console.log(
      `Demo balance: ${await ethers.provider.getBalance(demo.target)}`,
    );
    console.log(`Value of a: ${await demo.a()}`);
  });

