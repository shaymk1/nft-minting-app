
import React from 'react'

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
				<button onClick={connectAccounts}>
                Connect
                </button>
			)}
		</div>
	);
}

export default NavBar