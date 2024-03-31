const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new greeting once it's changed", async function () {
    const transactions = await ethers.getContractFactory("Transactions");
    const Transactions = await transactions.deploy("Hello, world!");
    await Transactions.deployed();

    expect(await Transactions.greet()).to.equal("Hello, world!");

    const setGreeting = await Transactions.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreeting.wait();

    expect(await Transactions.greet()).to.equal("Hola, mundo!");
  });
});
