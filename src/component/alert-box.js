import React, { useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

export default function AlertBox({ isError, AlertMessage }) {
  const [hidealertbox, sethidealertbox] = useState(false);
  const AlertBoxStyle = styled.div`
  z-index: 10000;
  position: fixed;
  top: 90px;
  right: 0;
  padding: 10px 20px;
  min-width: 250px;
  background-color: rgb(15, 140, 15);
  color: rgb(237, 247, 237);
    ${hidealertbox && "display: none;"}
    ${isError &&
    "color: #fbeced; background-color: rgb(170, 55, 55);"
    }
`
  setTimeout(() => {
    sethidealertbox(true);
  }, 5000);
  return createPortal(
    <AlertBoxStyle
    >
      {AlertMessage}
    </AlertBoxStyle>,
    document.getElementById("forAlert")
  );
}
