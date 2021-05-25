import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContent>
        DESENVOLVIDO POR RENAN ALVARENGA
    </FooterContent>
  );
}
export default Footer;

const FooterContent = styled.footer`
  background-color: black;
  color: white;
  padding: 16px;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
