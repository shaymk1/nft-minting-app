const hre = require('hardhat');

async function main() {
	// We get the contract to deploy
	const RoboPunks = await hre.ethers.getContractFactory('RoboPunks');
	const robopunks = await RoboPunks.deploy();

	await robopunks.deployed();

	console.log('RoboPunks deployed to:', robopunks.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
