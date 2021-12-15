import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import Chain from './chains' 

const walletConnect = new WalletConnectConnector({
	chainId: Chain.BSC,
	supportedChainIds: [
		Chain.BSC, 
		Chain.RINKEBY, 
		Chain.BSC_TESTNET
	],
  rpc: { 
    [Chain.BSC] : process.env.RPC_URL_BSC, 
    [Chain.RINKEBY]: process.env.RPC_URL_RINKEBY,
    [Chain.BSC_TESTNET]: process.env.RPC_URL_BSC_TESTNET
  },
	bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 12000
})

export default walletConnect 