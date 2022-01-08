import React, { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";

import Grid from "../../components/Grid/index.jsx";
import Layout from "../../components/Layout/index.jsx";

import NFT from "../../../build/contracts/NFT.json";
import Marketplace from "../../../build/contracts/Marketplace.json";
import CollectibleService from "../../services/CollectibleService/index.js";

export default function HomeScreen() {
  const { library } = useWeb3React();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchItems = () => {
    if (library) {
      async function fetchItemsAsync() {
        const marketplaceContract = new library.eth.Contract(
          Marketplace.abi,
          process.env.MARKETPLACE_CONTRACT_ADDRESS
        );
        const nftContract = new library.eth.Contract(
          NFT.abi,
          process.env.NFT_CONTRACT_ADDRESS
        );

        const marketItems = await marketplaceContract.methods
          .getItemsForSale()
          .call();

        const items = await Promise.all(
          marketItems.map(async ({ tokenId, price, owner }) => {
            const tokenURI = await nftContract.methods.tokenURI(tokenId).call();
            const response = await CollectibleService.getMetadata(tokenURI);
            const {
              id,
              name,
              description,
              imageURL,
              creator: { address: creatorAddress },
            } = response.data.collectible;

            return {
              id: id,
              token: tokenId,
              price: library.utils.fromWei(price, "ether"),
              creator: creatorAddress,
              owner,
              favorite: false,
              url: imageURL,
              name,
              description,
            };
          })
        );

        setData(items);
        setLoading(false);
      }

      fetchItemsAsync();
    }
  };

  useEffect(fetchItems, [library]);

  return (
    <Layout>
      <Grid data={data} loading={loading} />
    </Layout>
  );
}
