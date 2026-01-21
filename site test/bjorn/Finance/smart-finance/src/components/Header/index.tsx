"use client";

import Image from "next/image";
import { Container, Nav, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <Image src="/logo.png" alt="AiFin Logo" width={28} height={28} />
      </Logo>

      <Nav>
        <a>Art</a>
        <a>Collections</a>
        <a>Sales</a>
        <a>Design</a>
      </Nav>
    </Container>
  );
}
