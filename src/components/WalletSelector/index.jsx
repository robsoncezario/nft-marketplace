import React from "react";
import { useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";

import {
  Container,
  Header,
  Close,
  Grid,
  Card,
  Icon,
  Name,
  Label,
  RedirectButton,
} from "./styles";

import ToastyService from "../../services/ToastyService/index.js";

import getErrorMessage from "../../methods/getErrorMessage";
import walletList from "../../constants/wallets.json";

import { injected, walletConnect, binanceSC } from "../../connectors/index";
import { setWalletConnectorId } from "../../store/wallet/actions";

export default function WalletSelector({ onClose }) {
  const dispatch = useDispatch();
  const { activate, account } = useWeb3React();
  const ethereum = window.ethereum;

  const selectWallet = (id) => {
    async function connectWalletAsync() {
      dispatch(setWalletConnectorId(id));

      try {
        switch (id) {
          case 1:
            await activate(injected, undefined, true);
            break;
          case 2:
          case 3: {
            walletConnect.walletConnectProvider = undefined;
            walletConnect.config.qrcode = true;

            await activate(walletConnect, undefined, true);
            break;
          }
          case 4:
            await activate(binanceSC, undefined, true);
            break;
        }
      } catch (err) {
        const message = getErrorMessage(err);
        ToastyService.error(message);
      } finally {
        onClose();
      }
    }

    connectWalletAsync();
  };

  const redirectToURL = (url) => {
    window.location.href = url;
  };

  const redirectToEthereum = () => {
    window.open("https://ethereum.org/en/wallets/");
  };

  return (
    <Container>
      <Header>
        <h4>Connect Wallet</h4>
        <Close className="fas fa-times" onClick={onClose} />
      </Header>

      <Grid>
        {walletList.map(({ id, name, icon, redirect }) => {
          const withRedirect = !ethereum && redirect;

          const handleClick = () => {
            if (withRedirect) {
              redirectToURL(redirect);
            } else {
              selectWallet(id);
            }
          };

          return (
            <Card key={"wallet-connector-id" + id} onMouseDown={handleClick}>
              <Icon
                src={require("../../assets/images/wallets/" + icon).default}
              />
              <Name>
                {withRedirect ? "Install " : ""}
                {name}
              </Name>
            </Card>
          );
        })}
      </Grid>

      <Label>New to Ethereum?</Label>
      <RedirectButton onClick={redirectToEthereum}>
        Learn more about wallets
      </RedirectButton>
    </Container>
  );
}
