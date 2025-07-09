// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "forge-std/Test.sol";
import "forge-std/console.sol";
import "../src/KrukToken.sol";
import "../src/FlashBorrower.sol";
import {IERC3156FlashLender} from "../src/IERC3156FlashLender.sol";

contract DOMTokenTest is Test {
  DomToken dom;
  FlashBorrower borrower;
  address self = address(this);
  event Action1(address borrower, address token, uint amount, uint fee);

  function setUp() public {
    dom = new DOMToken();
    borrower = new FlashBorrower(IERC3156FlashLender(address(dom)));

    dom.mint(address(borrower), 10);
  }

  function  testFlashBorrow() public {
    assertEq(dom.balanceOf(self), 0);
    uintamount = 20000;
    uint fee = dom.flasFee(address(dom), amount);

    vm.expectEmit(false, false, false, true, address(borrower));
    emit Action1(address(borrower), address(dom), amount, fee);
    borrower.flashBorrower(address(dom), amount, abi.encode(1));

    assertEq(dom.balanceOf(self), fee);
  }
}