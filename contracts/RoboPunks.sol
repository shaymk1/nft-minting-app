//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RoboPunks is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply; //the number of coins or tokens that currently exists right now and are either in circulation or locked somehow
    uint256 public maxSupply;// the maximum amount of nft's that will ever exist in its lifetime 
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri; //opensea use thid to determine the url of the collection
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints; //to keep track of how many mints each wallet has minted

    constructor () payable ERC721('RoboPunks', 'RP'){
       mintPrice = 0.002 ether;
       totalSupply = 0;
       maxSupply = 1000;
       maxPerWallet = 3;
       //set the withdrawal adress

    }
    //only ownner modifier:comes from the ownable contract
    function setisPublicMintEnabled(bool isPublicMintEnabled_)
    external onlyOwner{
        isPublicMintEnabled = isPublicMintEnabled_;
    }
    //calldata is the same as string
    //basetokenuri has the url which has the images
  function setbaseTokenUri ( string calldata baseTokenUri_) external onlyOwner{
    baseTokenUri = baseTokenUri_;

  }
//the function that opensea calls to grab the images
 function tokenURI(uint256 tokenId_)public view override returns (string memory){
    require(_exists(tokenId_), 'Token does not exists!');
    return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), '.json'));
 }

 function withdraw() external onlyOwner{
    (bool success,) = withdrawWallet.call{value:address(this).balance}('');
    require(success, 'withdrawal failed!');
 }

 function mint(uint256 quantity_) public payable{
    require(isPublicMintEnabled, 'minting not enabled!');
    require(msg.value == quantity_ * mintPrice, 'wrong minting value');
    require(totalSupply + quantity_ <= maxSupply, 'Sold Out!');
    require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceeded max wallet limit');//make sure that its not abused instead of using max of


walletMints[msg.sender] += quantity_;   // if below maxPerWallet ok to increment - new line thx to this thread
    //the actual minting
    for (uint256 index = 0; index < quantity_; index++) {
        uint256 newTokenId = totalSupply + 1;
        //effect happens everytime you are changing any variable in a storage
        //effect needs to happen before we interact with the contract
        totalSupply ++;//effect
        //safemint prefents re-entrancy attack
        _safeMint(msg.sender, newTokenId);//safemint exist in erc21,
    }
 }

}