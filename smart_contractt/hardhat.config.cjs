// https://eth-sepolia.g.alchemy.com/v2/Lg05zvpJ9NWpPP8pzjJs6Zkeo9kISVXU

// Require the necessary module
const { task } = require("hardhat/config");

// Define the networks configuration
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Lg05zvpJ9NWpPP8pzjJs6Zkeo9kISVXU",
      accounts: [
        "bce8a15dd364a66eed23a08411c3e59c8ba39fb25867a9baf4256ebe72ec5f2b",
      ],
    },
  },
};
