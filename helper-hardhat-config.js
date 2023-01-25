const networkConfig = {
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "0x83632D36b8AF5bA96C0C00A1517c1940d093F434",
  },
};

const developmentChains = ["localhost", "goerli"];
module.exports = {
  networkConfig,
  developmentChains,
};
