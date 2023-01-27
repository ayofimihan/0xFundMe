const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = getNamedAccounts;
  const networkName = network.name;
  console.log(networkName);

  if (developmentChains.includes(networkName)) {
    log("local network detected, deploying mocks...");
    const mockContract = await deploy("mockV3Aggregator", {
      from: deployer,
      args: [DECIMALS, INITIAL_ANSWER],
      log: true,
    });
    log("Mocks Deployed!");
    log("--_--_--_--_--_--_--_--_--_--_--_--_--_--");
  }
};

module.exports.tags = ["all","mocks"]