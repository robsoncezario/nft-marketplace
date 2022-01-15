import navigationRoutes from "./navigationRoutes.js";
import DetailsScreen from "./Details/index.jsx";

export default [
  ...navigationRoutes,
  ...[
    {
      path: ["/details/:tokenId"],
      component: DetailsScreen,
    },
  ],
];
