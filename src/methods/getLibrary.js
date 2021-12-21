import Web3 from "web3";

export default function getLibrary(provider) {
  const library = new Web3(provider);

  library.pollingInterval = 12000;
  return library;
}
