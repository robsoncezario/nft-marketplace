import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import navRoutes from "../../pages/navigationRoutes";

import { Row, Item } from "./styles";

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();

  const setRoute = (path) => {
    history.push(path);
  };

  return (
    <Row>
      {navRoutes.map((r, i) => (
        <Item
          key={"navbar-route-" + i}
          onClick={() => setRoute(r.path[0])}
          isCurrent={r.path.findIndex((sr) => sr === location.pathname) !== -1}
        >
          {r.label}
        </Item>
      ))}
    </Row>
  );
}
