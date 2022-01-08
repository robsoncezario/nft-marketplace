import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";

import WalletSelector from "../WalletSelector/index.jsx";
import JazzIcon from "../JazzIcon/index.jsx";
import TransitionModal from "../TransitionModal/index";

import AccountModal from "../AccountModal/index.jsx";
import useETHBalance from "../../hooks/useETHBalance/index.js";

import { Container, Balance, Button, Spacer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setWalletSelectorVisible } from "../../store/wallet/actions.js";

export default function ConnectWallet({ desktopOnly = false }) {
  const dispatch = useDispatch();

  const [openDetails, setOpenDetailsModal] = useState(false);
  const balance = useETHBalance();
  const visible = useSelector((state) => state.wallet.selector.visible);

  const { account, active } = useWeb3React();

  const handleClick = () => {
    dispatch(setWalletSelectorVisible(true));
  };

  const handleClose = () => {
    dispatch(setWalletSelectorVisible(false));
  };

  const showDetails = () => {
    setOpenDetailsModal(true);
  };

  const hideDetails = () => {
    setOpenDetailsModal(false);
  };

  return (
    <>
      <Container connected={active} desktopOnly={desktopOnly}>
        {active && <Balance>{balance && balance} ETH</Balance>}

        <Button onClick={active ? showDetails : handleClick}>
          {account === undefined
            ? "Connect wallet"
            : `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`}
          {active && (
            <>
              <Spacer />
              <JazzIcon size={16} account={account} />
              <i
                className={
                  openDetails ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              />
            </>
          )}
        </Button>
      </Container>

      <TransitionModal open={visible} onClose={handleClose}>
        <WalletSelector onClose={handleClose} />
      </TransitionModal>

      <TransitionModal open={openDetails} onClose={hideDetails}>
        <AccountModal onClose={hideDetails} />
      </TransitionModal>
    </>
  );
}
