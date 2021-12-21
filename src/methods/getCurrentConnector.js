import { injected, binanceSC, walletConnect } from "../connectors";
import walletList from "../constants/wallets.json";

export default function getConnectorData(connector) {
  var id = 0;

  switch (true) {
    case connector === injected:
      id = 1;
      break;
    case connector == walletConnect:
      id = 2;
      break;
    case connector == binanceSC:
      id = 4;
      break;
  }

  return walletList.find((w) => w.id === id);
}
