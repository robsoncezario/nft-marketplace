import { InjectedConnector } from '@web3-react/injected-connector';
import Chain from './chains';

const injected = new InjectedConnector({
	supportedChainIds: [
		Chain.BSC,
		Chain.RINKEBY,
		Chain.BSC_TESTNET,
		Chain.GANACH,
	],
});

export default injected;
