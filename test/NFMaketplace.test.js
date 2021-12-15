const NFT = artifacts.require('./NFT.sol')
const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Marketplace', (accounts) => {
  let marketplaceContract
	let nftContract

  before(async () => {
    marketplaceContract = await Marketplace.new()

		const marketAddress = marketplaceContract.address; 
		nftContract = await NFT.new(marketAddress);

		const nftAddress = nftContract.address
		await marketplaceContract.setNFTContract(nftAddress)
  })

	describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = marketplaceContract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

		it('has a listing fee', async () => {
      const fee = await marketplaceContract.getFee()

      assert.notEqual(fee, null)
      assert.notEqual(fee, undefined)

			console.log(`fee ${fee.toString()}`)
    })
  })

  describe('minting', async () => {
    it('create token & add to marketplace', async () => {
			const transaction = await nftContract.mint('61b61b8c8750d0abda3676css9')

			const event = transaction.logs[0].args
      const tokenId = event.tokenId.toNumber()

      const owner = await nftContract.ownerOf(tokenId)

			//console.log(await nftContract.getAllTokens(owner))

			console.log('tokenId: ' + tokenId)
			console.log('tokenOwner: ' + owner)

			const fee = await marketplaceContract.getFee()
			const marketTransaction = await marketplaceContract.create(
				tokenId,
				10000, {
					value: fee
				}
			)
			const marketEvent = marketTransaction.logs[0];
			const eventData = marketEvent.args;  


      assert.equal(marketEvent.event, 'ItemForSale');

			console.log(await marketplaceContract.getItemsForSale())

			/*const buyTransaction = await marketplaceContract.purchase(eventData.id, {
				value: eventData.price
			})
			const buyEvent = buyTransaction.logs[0];
			const buyEventData = buyEvent.args;   */
		})
	})  
})
