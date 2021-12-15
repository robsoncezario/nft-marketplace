const NFT = artifacts.require("NFT");
const Marketplace = artifacts.require('Marketplace');

module.exports = async function(deployer) {
	await deployer.deploy(Marketplace);

	const marketplace = await Marketplace.deployed()

	await deployer.deploy(NFT, marketplace.address)
	const nft = await NFT.deployed(marketplace.address)

	await marketplace.setNFTContract(nft.address)
};