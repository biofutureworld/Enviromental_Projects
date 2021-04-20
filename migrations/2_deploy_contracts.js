var BioFutureToken = artifacts.require("./BioFutureToken.sol");
var BioFutureTokenSale = artifacts.require("./BioFutureTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BioFutureToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BioFutureTokenSale, BioFutureToken.address, tokenPrice);
  });
};
