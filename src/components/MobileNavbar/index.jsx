import React, { useState } from "react";
import NavModal from "../NavModal/index.jsx";
import TransitionModal from "../TransitionModal/index";
import { IconButton } from "./styles";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton className={"far fa-bars"} onClick={handleOpen} />
      <TransitionModal open={open} onClose={handleClose} align={"topCenter"}>
        <NavModal onClose={handleClose} />
      </TransitionModal>
    </>
  );
}
