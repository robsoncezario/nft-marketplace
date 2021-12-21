import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Container, Header, Close, Item } from "./styles";

import navigationRoutes from "../../pages/navigationRoutes";
import Logo from "../Logo/index.jsx";

export default function NavModal({ onClose }) {
  const history = useHistory();
  const location = useLocation();

  const setRoute = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <Header>
        <div className="wrapper">
          <Logo size={30} onlyIcon={true} />
        </div>

        <Close className="fas fa-times" onClick={onClose} />
      </Header>

      {navigationRoutes.map((r, i) => (
        <Item
          key={"mobile-navbar-route-" + i}
          onClick={() => setRoute(r.path[0])}
          isCurrent={r.path.findIndex((sr) => sr === location.pathname) !== -1}
        >
          {r.label}
        </Item>
      ))}
    </Container>
  );
}
