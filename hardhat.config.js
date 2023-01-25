require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-gas-reporter");

const localhosturi = process.env.LOCALHOST_URI;
const privateKey = process.env.GOERLI_PRIVATE_KEY;
const goerliApiKey = process.env.GOERLI_API_KEY;
const coinmarketcapKey = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.17",
  solidity: {
    compilers: [{ version: "0.8.17" }, { version: "0.6.6" }],
  },
  networks: {
    localhost: {
      url: localhosturi,
      chainId: 31337,
    },
    goerli: {
      url: goerliApiKey,
      accounts: [privateKey],
      chainId: 5,
    },
  },
  gasReporter: {
    enabled: true,
    currency: "GBP",
    coinmarketcap: coinmarketcapKey,
    noColors: true,
    outputFile: "gas-report.txt",
  },
  namedAccounts: {
    deployer: {
      default: 0,
      5: 0,
    },
  },
};
