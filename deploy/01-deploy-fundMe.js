//when you run npx hardhat deploy it calls all the scripts in this deploy folder

const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");

//normally we import stuff
//write the main function function main()
//then call the main function below catching errors and all

//but with hardhat-deploy we just write a single function here and export it.
// function deployFunc(){

// }
// module.exports.default = deployFunc

//extrapolating these two variables from hre(hardhat runtime environment)
//basically the same thing with saying hre.getNamedAccount/deployments
module.exports = async ({ getNamedAccounts, deployments }) => {
  //get deploy and log from deployments

  const { deploy, log } = deployments;
  const { deployer } = getNamedAccounts();
  const chainId = network.config.chainId;
  //use chain id to set it to different addresses, if chainID is X use Y, If chainID is A, use address B etc.
  const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

  //on localhost and hardhat we have to use MOCKS becauase theres no aggregator on those chains

  const fundMeContract = await deploy("FundMe", {
    from: deployer,
    //priceFeedAddress because the constructor expects it as an argument

    args: [ethUsdPriceFeedAddress],
    log: true,
  });
  console.log(` Contract successfully deployed to ${fundMeContract.address}`);
};
