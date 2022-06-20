//import { BigNumber, ethers } from 'ethers';
//import { useState } from 'react';
//import roboPunks from './RoboPunks.json';

//const roboPunksAddress = '0x168c06D4857C77476528B06eCDb81916362A17B4';

import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

const MainMint = ({ accounts, setAccounts }) => {
	return (
		<Flex justify="center" align="center" paddingBottom="150px" height="100vh">
			<Box width="520px">
				<Text fontSize="48px" textShadow="0 5px #0000">
					RoboPunks
				</Text>
				<Text fontSize="30px" fontFamily="VT323" textShadow="0 2px 2px #0000">
					Three millenials has passed now, can the RoboPunks save humanity from
					their destructive need for NFT's? Mint RoboPunks to find out!{' '}
				</Text>
				<Text fontSize="10px" color = 'aqua'>You must be connected to mint!</Text>
			</Box>
		</Flex>
	);
};

export default MainMint;
