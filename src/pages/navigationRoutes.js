import FavoritesScreen from "./Favorites/index.jsx";
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
    path: ["/favorites", "/favorite"],
    component: FavoritesScreen,
    label: "Favorites",
  },

  {
    path: ["/promoted"],
    component: PromotedScreen,
    label: "Promoted",
  },
];
