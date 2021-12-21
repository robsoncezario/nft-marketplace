import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Blockie as Identicon } from "react-identicon-variety-pack";

import WalletSelector from "../WalletSelector/index.jsx";
import TransitionModal from "../TransitionModal/index";

import { Container, Balance, Button, Spacer } from "./styles";

import { injected, walletConnect } from "../../connectors/index";
import ethIcon from "../../assets/images/cryptos/eth.svg";
import AccountModal from "../AccountModal/index.jsx";
import useETHBalance from "../../hooks/useETHBalance/index.js";

export default function ConnectWallet() {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetailsModal] = useState(false);
  const balance = useETHBalance();

  const { activate, account, active } = useWeb3React();

  const handleDidMount = () => {
    injected.isAuthorized().then(async (isAuthorized) => {
      if (isAuthorized) {
        activate(injected);
      } else {
        walletConnect.config.qrcode = false;
        activate(walletConnect, undefined, true);
      }
    });
  };

  useEffect(handleDidMount, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showDetails = () => {
    setOpenDetailsModal(true);
  };

  const hideDetails = () => {
    setOpenDetailsModal(false);
  };

  return (
    <>
      <Container connected={active}>
        {active && (
          <Balance>
            <img src={ethIcon} />
            {balance && balance} ETH
          </Balance>
        )}

        <Button onClick={active ? showDetails : handleClick}>
          {account === undefined
            ? "Connect wallet"
            : `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`}
          {active && (
            <>
              <Spacer />
              <Identicon size={24} seed={account} circle={true} />
              <i
                className={
                  openDetails ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              />
            </>
          )}
        </Button>
      </Container>

      <TransitionModal open={open} onClose={handleClose}>
        <WalletSelector onClose={handleClose} />
      </TransitionModal>

      <TransitionModal open={openDetails} onClose={hideDetails}>
        <AccountModal onClose={hideDetails} />
      </TransitionModal>
    </>
  );
}
