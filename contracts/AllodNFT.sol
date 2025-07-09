// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AllodNFT is ERC721, Ownable {
    constructor() ERC721("AllodNFT", "AFT") Ownable(msg.sender) {}


    function safeMint(address to1, uint256 tokenId) public onlyOwner {
        _safeMint(to1, tokenId);
    }
}
