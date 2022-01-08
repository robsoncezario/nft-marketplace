import React from "react";
import Card from "../Card/index.jsx";
import { GridInfiniteScroll } from "./styles.js";

export default function Grid({ data, loading }) {
  return (
    <GridInfiniteScroll gap={10}>
      {data.map(
        ({
          id,
          token,
          name,
          description,
          url,
          price,
          creator,
          owner,
          favorite,
        }) => (
          <Card
            key={"card-" + id}
            id={id}
            token={token}
            name={name}
            description={description}
            url={url}
            price={price}
            creator={creator}
            owner={owner}
            favorite={favorite}
            data-grid-groupkey={0}
          />
        )
      )}
    </GridInfiniteScroll>
  );
}
