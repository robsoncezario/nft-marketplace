import React from "react";
import { useDispatch } from "react-redux";

import { Wrapper, Button } from "./styles";
import { MINT_MODAL_TOGGLE_VISIBILITY } from "../../store/mint/types";
import { toggleModalVisibility } from "../../store/mint/actions";

export default function MintFAB() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModalVisibility(true));
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} className={"fal fa-arrow-to-top"} />
    </Wrapper>
  );
}
