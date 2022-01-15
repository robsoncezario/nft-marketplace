import ShowroomScreen from "./Showroom/index.jsx";
import HomeScreen from "./Home/index.jsx";
import PromotedScreen from "./Promoted/index.jsx";

export default [
  {
    path: [
      "/explore",
      "/market",
      "/collectibles",
      "/nfts",
      "/",
      "/home",
      "/index",
    ],
    component: HomeScreen,
    label: "Explore",
  },

  {
    path: ["/my_nfts", "/showroom"],
    component: ShowroomScreen,
    label: "My NFTs",
  },

  {
    path: ["/promoted"],
    component: PromotedScreen,
    label: "Promoted",
  },
];
