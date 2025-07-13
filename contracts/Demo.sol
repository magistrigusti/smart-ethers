// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Demo {
  address public owner;
  mapping(address sender => uint amountSent) public transfers;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(address _owner) {
    owner = _owner;
  }

  function changeOwner(address _newOwner) external onlyOwner {
    owner = _newOwner;
  }

  receive() external payable {
    transfers[msg.sender] += msg.value;
  }
}