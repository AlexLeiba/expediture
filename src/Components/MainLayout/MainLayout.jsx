import React from "react";
import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import { Container, ContentContainer } from "./MainLayout.style";

export function MainLayout({ children }) {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      {/* <Footer /> */}
    </Container>
  );
}
