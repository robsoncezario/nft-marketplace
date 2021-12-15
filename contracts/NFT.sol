// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
		address private marketplaceAddress; 

    constructor(address _marketplaceAddress) ERC721("CollectibleNFT", "NFT") {
				marketplaceAddress = _marketplaceAddress;
		}

    function mint(string memory _tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
				//_mint(account, newItemId);
        _setTokenURI(newItemId, _tokenURI);
				setApprovalForAll(marketplaceAddress, true);

        return newItemId;
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _baseURI() 
			internal 
			view
			override 
			returns (string memory) 
		{
        return "http://localhost:5000/static/";
    }

		/* 
			Learning purposes 
		*/
		
		function getAllTokens(address account) 
			public 
			view 
			returns (uint256[] memory) 
		{
				uint256 tokenCount = 0;
				uint256 numTokens = _tokenIds.current();

        for (uint tokenId = 1; tokenId <= numTokens; tokenId++) {
					if (ownerOf(tokenId) == msg.sender) {
						tokenCount++;
					}
        }
        
				uint256 index = 0;
        uint256[] memory tokenList = new uint256[](tokenCount);

				for (uint tokenId = 1; tokenId <= numTokens; tokenId++) {
					if (ownerOf(tokenId) == msg.sender) {
						tokenList[index] = tokenId;
						index++;
					}
        }

        return tokenList;
    }
}
