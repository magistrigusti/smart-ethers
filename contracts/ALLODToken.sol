// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {ERC20} from "./ERC20.sol";
import {ERC20Burnable} from "./ERC20Burnable.sol";

contract ALLODToken is ERC20, ERC20Burnable {
  address public owner;

  modifier onlyOwner() {
    require(msg.sender == owner, "not an owner!");
    _;
  }

  constructor(uint256 _premintAmount) ERC20("ALLODToken", "ALOD") {
    owner = msg.sender;

    _mint(msg.sender, _premintAmount * 10 ** decimals());
  }

  function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
  }
}