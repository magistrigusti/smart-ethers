// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "./IERC20.sol";

contract ERC20Metadata {
  string private _tokenURI;

  constructor (string memory tokenURI_) public {
    _setTokenURI(tokenURI_);
  }

  function tokenURI() external view returns(string memory) {
    return _tokenURI;
  }

  function _setTokenURI(string memory tokenURI_) internal {
    _tokenURI = tokenURI_;
  } 
}