const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("SamNFT");

    // The IPFS Address of image uploaded to Pinata
    // const URI = "ipfs://QmVn7PkstAfZV8UoFTx1m9JXAJWbRwNi3q2pW2txBN2fTA"
    const URI = "ipfs://QmQ8J9u43Ah3kp4Fr1eK5PuP5DS2nox9VXWUSDnAJWJ6K4"

    // Wallet Address
    const WALLET_ADDRESS = "0x"

    // Contract address deployed
    const CONTRACT_ADDRESS = "0x"

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", contract);
}

main().then(() => process.exit(0))
      .catch(error => {
          console.error(error);
          process.exit(1);
      })