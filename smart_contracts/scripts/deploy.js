const main = async () => {
  try {
    const transactionsFactory = await hre.ethers.getContractFactory(
      "Transactions"
    );
    const transactionsContract = await transactionsFactory.deploy();
    await transactionsContract.deployed();
    console.log("Transactions address: ", transactionsContract.address);
  } catch (error) {
    console.error("Error deploying contract:", error);
    throw error;
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
