import React, { useRef, useEffect } from "react";
import jazzIcon from "@metamask/jazzicon";

import Circle from "./styles";

export default function JazzIcon({ account, size = 32 }) {
  const ref = useRef();

  const handleAccountChange = () => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(
        jazzIcon(size, parseInt(account.slice(2, 10), 16))
      );
    }
  };

  useEffect(handleAccountChange, [account]);

  return <Circle ref={ref} size={size}></Circle>;
}
