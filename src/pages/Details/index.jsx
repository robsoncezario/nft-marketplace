import React, { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/index.jsx";
import CollectibleService from "../../services/CollectibleService/index.js";
import NFT from "../../../build/contracts/NFT.json";
import Marketplace from "../../../build/contracts/Marketplace.json";

export default function DetailsScreen() {
  const { tokenId } = useParams();
  const { library, account } = useWeb3React();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    if (library) {
      async function fetchDataAsync() {
        const marketplaceContract = new library.eth.Contract(
          Marketplace.abi,
          process.env.MARKETPLACE_CONTRACT_ADDRESS
        );
        const nftContract = new library.eth.Contract(
          NFT.abi,
          process.env.NFT_CONTRACT_ADDRESS
        );
        const pastEvents = await nftContract.getPastEvents("Transfer", {
          filter: {
            tokenId: tokenId,
          },
          fromBlock: 0,
          toBlock: "latest",
        });

        const transfers = await Promise.all(
          pastEvents.map(
            async ({ blockNumber, returnValues: { from, to } }) => {
              const { timestamp } = await library.eth.getBlock(blockNumber);

              return {
                to,
                from,
                minted: from == "0x0000000000000000000000000000000000000000",
                createdAt: new Date(timestamp * 1000),
              };
            }
          )
        );

        const { price, owner } = await marketplaceContract.methods
          .findByTokenId(tokenId)
          .call();

        const tokenURI = await nftContract.methods.tokenURI(tokenId).call();
        const response = await CollectibleService.getMetadata(tokenURI);
        const {
          id,
          name,
          description,
          imageURL,
          creator: { address: creatorAddress },
        } = response.data.collectible;

        setData({
          id: id,
          token: tokenId,
          price: library.utils.fromWei(price, "ether"),
          creator: creatorAddress,
          owner,
          favorite: false,
          url: imageURL,
          name,
          description,
          transfers,
        });
        setLoading(false);
      }

      fetchDataAsync();
    }
  };

  useEffect(fetchData, [library]);

  console.log(data);

  return (
    <Layout>
      <h1>Details</h1>
    </Layout>
  );
}
