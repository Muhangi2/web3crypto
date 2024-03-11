// https://eth-sepolia.g.alchemy.com/v2/Lg05zvpJ9NWpPP8pzjJs6Zkeo9kISVXU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Lg05zvpJ9NWpPP8pzjJs6Zkeo9kISVXU",
      account: [process.env.PRIVATE_KEY],
    },
  },
};
