import React from "react";
import Card from "../Card/index.jsx";
import { GridInfiniteScroll } from "./styles.js";

const itemList = [
  {
    id: 1,
    name: "Cryptopunk #1",
    token: "a",
    url: "https://t2.tudocdn.net/307472?w=1200&h=1200",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: true,
  },

  {
    id: 2,
    name: "Cryptopunk #2",
    token: "b",
    url: "https://br.web.img3.acsta.net/pictures/20/01/10/15/42/1604813.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: false,
  },

  {
    id: 3,
    name: "Cryptopunk #3",
    token: "c",
    url: "https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: false,
  },

  {
    id: 4,
    name: "Cryptopunk #4",
    token: "d",
    url: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/02/14/deadpool-gallery-06-gallery-image-1024x551.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: false,
  },

  {
    id: 5,
    name: "Cryptopunk #5",
    token: "e",
    url: "https://s2.glbimg.com/kVRjlmKXmkqHQ79I4kUQi2_v-Gg=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/g/N/wAA0FFR8e3sshlSwLEOg/marvels-spider-man-miles-morales-20210106141333.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: true,
  },

  {
    id: 6,
    name: "Cryptopunk #6",
    token: "f",
    url: "https://s2.glbimg.com/ppjLSnSdYRXW5PTCHgJmebUY25o=/0x0:1531x999/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/5/F/8V5cBsRaeoaBph6kudJw/homem-aranha-longe-de-casa-tom-holland-zendaya.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: true,
  },

  {
    id: 7,
    name: "Cryptopunk #7",
    token: "g",
    url: "https://sm.ign.com/t/ign_br/screenshot/default/review-spider-man-02_8525.1200.jpg",
    price: 2.2,
    creator: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    owner: "0xEfcaA17aD490EE89f11be228F1949db46f5980d1",
    favorite: false,
  },
];

export default function Grid() {
  return (
    <GridInfiniteScroll gap={10}>
      {itemList.map(
        ({ id, token, name, url, price, creator, owner, favorite }) => (
          <Card
            key={"card-" + id}
            id={id}
            token={token}
            name={name}
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
