// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Demo {
  event WorkDone(address indexed sender, uint at, uint result);

  uint result;

  function run() public {
    result = 1 + 2;
    emit WorkDone(msg.sender, block.timestamp, result);
  }
}