import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MintModal from "../MintModal/index.jsx";
import TransitionModal from "../TransitionModal/index";
import { Button } from "./styles";
import { MINT_MODAL_TOGGLE_VISIBILITY } from "../../store/mint/types";

export default function MintButton() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.mint.isVisible);

  const handleClick = () => {
    dispatch({
      type: MINT_MODAL_TOGGLE_VISIBILITY,
      payload: true,
    });
  };

  const handleClose = () => {
    dispatch({
      type: MINT_MODAL_TOGGLE_VISIBILITY,
      payload: false,
    });
  };

  return (
    <>
      <Button onClick={handleClick} className={"fal fa-arrow-to-top"} />
      <TransitionModal open={isVisible} onClose={handleClose}>
        {<MintModal key={"mint-modal-" + isVisible} onClose={handleClose} />}
      </TransitionModal>
    </>
  );
}
