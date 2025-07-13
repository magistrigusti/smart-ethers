import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@matterlabs/hardhat-zksync-toolbox";
import "./tasks/sample";

const config: HardhatUserConfig = {
  // defaultNetwork: "zkTestnet",
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_KEY,
    currency: "USD",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // goerli: {
    //   url: `${process.env.ALCHEMY_GOERLI_URL}`,
    //   accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
    // },
    sepolia: {
      url: `${process.env.ALCHEMY_SEBOLIA_URL}`,
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_KEY}`
  }
};

export default config;
