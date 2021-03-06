// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "./NFT.sol";

contract Marketplace is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    uint256 private fee = 0.1 ether;

    NFT private nftContract;

    struct Item {
        uint256 id;
        uint256 tokenId;
        address payable owner;
        uint256 price;
        bool isForSale;
    }
    
    mapping(uint256 => Item) private _items;

    event ItemForSale (
        uint indexed id,
        uint256 indexed tokenId,
        address owner,
        uint256 price
    );

    constructor() {

    }

    modifier fitsMinPrice(uint256 price) {
        require(price > 0, "Price must be at least 1 wei");
        _;
    }

    modifier takeFee() {
        require(msg.value == fee, "Price must be equal to listing price");
        _;
    }

    modifier tokenOwner(uint256 tokenId) {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Sender does not own the item");
        _;
    }

    modifier itemOwner(uint256 itemId) {
        require(_items[itemId].owner == msg.sender, "Sender does not own the item");
        _;
    }

    function setNFTContract(address _nftContract) public {
        nftContract = NFT(_nftContract);
    }

    function create(uint256 tokenId, uint256 price)
        fitsMinPrice(price)
        takeFee
        tokenOwner(tokenId)
        nonReentrant
        public
        payable
    {
        _itemIds.increment();

        uint256 itemId = _itemIds.current();
        _items[itemId] = Item(
            itemId,
            tokenId,
            payable(msg.sender),
            price,
            true
        );
        nftContract.transferFrom(msg.sender, address(this), tokenId);
        emit ItemForSale(
            itemId, 
            tokenId, 
            msg.sender, 
            price
        );
    }

    function putForSale(uint256 itemId, uint256 price) 
        nonReentrant
        takeFee
        itemOwner(itemId)
        public
        payable
    {
        Item memory item = _items[itemId];

        item.price = price;
        item.isForSale = true;

        _items[itemId] = item;
        nftContract.transferFrom(msg.sender, address(this), item.tokenId);

        emit ItemForSale(
            item.id, 
            item.tokenId, 
            msg.sender, 
            price
        );
    }

    function removeFromSale(uint256 itemId)
        nonReentrant
        takeFee
        itemOwner(itemId)
        public
        payable
    {
        _items[itemId].isForSale = false;
    }

    function updatePrice(uint256 itemId, uint256 price)
        nonReentrant
        takeFee
        itemOwner(itemId)
        public
        payable
    {
        _items[itemId].price = price;
    }

    function purchase(uint256 itemId) 
        nonReentrant
        public 
        payable 
    {
        Item memory item = _items[itemId];

        require(msg.value == item.price, "Please submit the asking price in order to complete the purchase");
        require(msg.sender != item.owner, "You can`t buy your own NFT.");

        item.owner.transfer(msg.value);
        nftContract.transferFrom(address(this), msg.sender, item.tokenId);

        item.owner = payable(msg.sender);
        item.isForSale = false;

        _items[itemId] = item;
    }

    function getFee() public view returns (uint256) {
        return fee;
    }

    function getMyItems(address owner) 
        public 
        view 
        returns (Item[] memory) 
    {
        uint256 itemCount = 0;
        uint256 numItems = _itemIds.current();

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            if (_items[itemId].owner == owner) {
                itemCount++;
            }
        }
        
        uint256 index = 0;
        Item[] memory itemList = new Item[](itemCount);

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            if (_items[itemId].owner == owner) {
                itemList[index] = _items[itemId];
                index++;
            }
        }

        return itemList;
    }

    function getItemsForSale() 
        public 
        view 
        returns (Item[] memory) 
    {
        uint256 itemCount = 0;
        uint256 numItems = _itemIds.current();

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            if (_items[itemId].isForSale == true) {
                itemCount++;
            }
        }
        
        uint256 index = 0;
        Item[] memory itemList = new Item[](itemCount);

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            if (_items[itemId].isForSale == true) {
                itemList[index] = _items[itemId];
                index++;
            }
        }

        return itemList;
    }

    function getAll() 
        public 
        view 
        returns (Item[] memory) 
    {
        uint256 numItems = _itemIds.current();
        Item[] memory itemList = new Item[](numItems);

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            itemList[itemId - 1] = _items[itemId];
        }

        return itemList;
    }

    function findByTokenId(uint256 tokenId) public view returns (Item memory) {
        Item memory item;
        uint256 numItems = _itemIds.current();

        for (uint itemId = 1; itemId <= numItems; itemId++) {
            if (_items[itemId].tokenId == tokenId) {
                item = _items[itemId];
                break;
            }
        }

        return item;
    }
}