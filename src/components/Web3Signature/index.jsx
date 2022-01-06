import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";

import { injected, walletConnect } from "../../connectors/index";
import { setAddress, setSignature } from "../../store/auth/actions.js";

import AuthService from "../../services/AuthService";
import ToastyService from "../../services/ToastyService";

export default function Web3Signature({ children }) {
  const { activate, account, active, library } = useWeb3React();
  const dispatch = useDispatch();

  const activateWallet = () => {
    injected.isAuthorized().then(async (isAuthorized) => {
      if (isAuthorized) {
        await activate(injected);
      } else {
        walletConnect.config.qrcode = false;
        await activate(walletConnect, undefined, true);
      }
    });
  };

  useEffect(activateWallet, []);

  const handleSign = () => {
    dispatch(setAddress(account, account && !!library));

    if (account && !!library) {
      async function signIn() {
        const response = await AuthService.getNounce();
        const {
          data: { token, message },
        } = response;

        library.eth.personal
          .sign(message + token, account, "")
          .then((signature) => {
            dispatch(setSignature(signature));
          })
          .catch(() => {
            ToastyService.error(
              "You can`t move forward without granting your signature. By this, we guarantee a safe move on our platform"
            );
          });
      }

      signIn();
    }
  };

  useEffect(handleSign, [account]);

  return <>{children}</>;
}
