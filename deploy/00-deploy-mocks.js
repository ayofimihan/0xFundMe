// const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = getNamedAccounts;
  const chainID = network.config.chainId;
};

if (developmentChains.includes(chainID)) {
    log("local network detected, deploying mocks...")
  const mockContract = await deploy("mockV3Aggregator", {
    from: deployer,
    args: [],
    log: false,
  });
}
