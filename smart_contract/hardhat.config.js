require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/W8M2vgXMA75Pg4SqvdptWJ_vih8iNCBE",
      // accounts: [process.env.MUMBAI_PRIVATE_KEY],
      accounts: [
        "bce8a15dd364a66eed23a08411c3e59c8ba39fb25867a9baf4256ebe72ec5f2b",
      ],
      chainId: 80001,
    },
  },
};
