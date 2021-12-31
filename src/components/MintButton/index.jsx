import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MintModal from "../MintModal/index.jsx";
import TransitionModal from "../TransitionModal/index";
import { Button } from "./styles";
import { toggleModalVisibility } from "../../store/mint/actions.js";

export default function MintButton() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.mint.visible);

  const handleClick = () => {
    dispatch(toggleModalVisibility(true));
  };

  const handleClose = () => {
    dispatch(toggleModalVisibility(false));
  };

  return (
    <>
      <Button onClick={handleClick}>Create</Button>
      <TransitionModal open={isVisible} onClose={handleClose}>
        {<MintModal key={"mint-modal-" + isVisible} onClose={handleClose} />}
      </TransitionModal>
    </>
  );
}
