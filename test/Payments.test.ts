import { loadFixture, ethers, expect } from "./setup";

describe("Payments", function() {
  async function deploy() {
    const Factory = await ethers.getContractFactory("Payments");
    const payments = await Factory.deploy();
    await payments.waitForDeployment();
  }
});