import React from 'react';
import { Header } from '../Header/Header';
// import { Footer } from "../Footer/Footer";
import { Container, ContentContainer } from './MainLayout.style';

export function MainLayout({ children, typePage }) {
  return (
    <Container>
      <Header typePage={typePage} />
      <ContentContainer>{children}</ContentContainer>
      {/* <Footer /> */}
    </Container>
  );
}
