import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import roboPunks from '../RoboPunks.json';

const roboPunksAddress = '0x168c06D4857C77476528B06eCDb81916362A17B4';

const MainMint = ({ accounts, setAccounts }) => {
	const [mintAmmount, setMintAmmount] = useState(1);
	const isConnected = Boolean(accounts[0]);

	async function handleMint() {
		if (window.ethereum) {
			//way for ether to connect to the blockchain
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				roboPunksAddress,
				roboPunks.abi,
				signer
			);

			try {
				const response = await contract.mint(BigNumber.from(mintAmmount));
				console.log('response:', response);
			} catch (err) {
				console.log('error :', err);
			}
		}

		const handleDecrement = () => {
			if (mintAmmount <= 1) return;
			setMintAmmount(mintAmmount - 1);
		};

		const handleIncrement = () => {
			if (mintAmmount >= 3) return;
			setMintAmmount(mintAmmount + 1);
		};

		return (
			<div>
				<h1>RoboPunks</h1>
				<p>
					Three millenials has passed now, can the RoboPunks save humanity from
					their destructive need for NFT's? Mint RoboPunks to find out!{' '}
				</p>

				{isConnected ? (
					<div>
						<div>
							<button onClick={handleDecrement}>-</button>
							<input type="number" value={mintAmmount} />
							<button onClick={handleIncrement}>+</button>
						</div>

						<button onClick={handleMint}>Mint Now</button>
					</div>
				) : (
					<p>You must be connected to mint!</p>
				)}
			</div>
		);
	}

	
};

export default MainMint;
