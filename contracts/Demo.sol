// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Demo {
  uint public a;
  address owner;

  constructor(address _owner) {
    owner = _owner;
  }

  function run(uint _a) external {
    require(owner == msg.sender, "not an owner!");
    a = _a;
  }
}