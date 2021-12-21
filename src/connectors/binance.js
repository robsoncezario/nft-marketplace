import { BscConnector } from "@binance-chain/bsc-connector";
import Chain from "./chains";

const binanceSC = new BscConnector({
  supportedChainIds: [Chain.BSC],
});

export default binanceSC;
