import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MintModal from "../MintModal/index.jsx";
import TransitionModal from "../TransitionModal/index";
import { Button } from "./styles";
import { toggleModalVisibility } from "../../store/mint/actions.js";

export default function MintButton() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.mint.isVisible);

  const handleClick = () => {
    dispatch(toggleModalVisibility(true));
  };

  const handleClose = () => {
    dispatch(toggleModalVisibility(false));
  };

  return (
    <>
      <Button onClick={handleClick}>
        Mint an item <i className="fas fa-arrow-to-top" />
      </Button>
      <TransitionModal open={isVisible} onClose={handleClose}>
        {<MintModal key={"mint-modal-" + isVisible} onClose={handleClose} />}
      </TransitionModal>
    </>
  );
}
