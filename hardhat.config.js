require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const localhosturi = process.env.LOCALHOST_URI;
const privateKey = process.env.GOERLI_PRIVATE_KEY;
const goerliApiKey = process.env.GOERLI_API_KEY;
const coinmarketcapKey = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
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
    currency: "USD",
    coinmarketcap: coinmarketcapKey,
    outputFile: "gasReport.txt",
    noColors: true,
  },
};
