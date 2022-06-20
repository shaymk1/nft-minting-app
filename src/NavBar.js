import { Box, Button, Flex, Image, Spacer, Link } from '@chakra-ui/react';
// eslint-disable-line no-use-before-define
import Facebook from './assets/assets/social-media-icons/facebook_32x32.png';
// eslint-disable-line no-use-before-define
import Twitter from './assets/assets/social-media-icons/twitter_32x32.png';
// eslint-disable-line no-use-before-define
import Email from './assets/assets/social-media-icons/email_32x32.png';// eslint-disable-line no-use-before-define

const NavBar = ({ accounts, setAccounts }) => {
	const isConnected = Boolean(accounts[0]);

	async function connectAccounts() {
		//check if metamask is connected
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			setAccounts(accounts);
		}
	}
	return (
		<Flex justify="space-between" align="center" padding="30px">
			{/*left side-social media icons */}
			<Flex justify="space-around" width="40%" padding="0 75px">
				<Link href="https://www.facebook.com">
					<Image
						src="{Facebook}"
						alt="facebook img"
						boxSize="42px"
						margin="0 15px"
					/>
				</Link>

				<Link href="https://www.twitter.com">
					<Image
						src="{Twitter}"
						alt="twitter img"
						boxSize="42px"
						margin="0 15px"
					/>
				</Link>

				<Link href="https://www.gmail.com">
					<Image src="{Email}" alt="gmail img" boxSize="42px" margin="0 15px" />
				</Link>
			</Flex>

			{/*right side-sections and connect */}
			<Flex justify="space-around" width="40%" padding="30px">
				<Box margin="0 15px">About</Box>
				<Spacer />
				<Box margin="0 15px">Mint</Box>
				<Spacer />
				<Box margin="0 15px">Team</Box>
				<Spacer />

				{/*connect button */}
				{/*check if connected with isConnected */}
				{isConnected ? (
					<Box margin="0 15px">connected</Box>
				) : (
					<Button 
					backgroundColor = '#D6517D'
					borderRadius = '5px'
					boxShadow = '0 2px 2px 1px #0F0F0F'
					color = 'white'
					cursor='pointer'
					fontFamily='inherit'
					padding = '15px'
					onClick={connectAccounts}>Connect</Button>
				)}
			</Flex>
		</Flex>
	);
};

export default NavBar;
