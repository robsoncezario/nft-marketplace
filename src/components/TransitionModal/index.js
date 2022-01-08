import React, { useRef, useEffect } from "react";
import Portal from "../Portal/index";
import { Overlay, Wrapper } from "./styles";

export default function TransitionModal({
  open,
  align = "center",
  onClose,
  children,
}) {
  const elRef = useRef();

  const handleClickOutside = (event) => {
    if (elRef.current && elRef?.current == event.target) {
      onClose();
    }
  };

  const bindEvents = () => {
    if (open) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  };

  useEffect(bindEvents, [open]);

  return (
    <Portal>
      <Overlay ref={elRef} open={open} align={align}>
        <Wrapper open={open}>{children}</Wrapper>
      </Overlay>
    </Portal>
  );
}
