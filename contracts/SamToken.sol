// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SamToken is ERC20, Ownable {

    // token price for ETH
    uint256 public tokensPerEth = 1000;

    constructor() ERC20("SamERC", "SRC") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function buyToken(address receiver, uint256 amount) public payable returns (uint256){
                
        uint256 tokenAmount = amount * tokensPerEth;
        
        _mint(receiver, tokenAmount);
        
        return tokenAmount;
    }

}