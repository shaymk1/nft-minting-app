
import React from 'react'
import { Box, Button, Flex, Image, Spacer, Link} from '@chackra-ui/react'
import Facebook from './assets/assets/social-media-icons/facebook_32x32.png'
import Twitter from './assets/assets/social-media-icons/twitter_32x32.png';
import Email from './assets/assets/social-media-icons/email_32x32.png';

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccounts (){
        //check if metamask is connected
     if (window.ethereum){
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        })
      setAccounts(accounts);
     }
    }
  return (
		<div>
			{/*left side-social media icons */}
			<div>Facebook</div>
			<div>Twitter</div>
			<div>Email</div>
			{/*right side-sections and connect */}
			<div>About</div>
			<div>Mint</div>
			<div>Team</div>

			{/*connect button */}
			{/*check if connected with isConnected */}
			{isConnected ? (
				<p>connect</p>
			) : (
				<button  onClick={connectAccounts}>
                Connected
                </button>
			)}
		</div>
	);
}

export default NavBar