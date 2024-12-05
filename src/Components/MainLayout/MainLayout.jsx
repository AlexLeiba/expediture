import React from 'react';
import { Header } from '../Header/Header';
import { Container } from '../Grid/Grid.style';

export function MainLayout({ children, typePage }) {
  return (
    <Container fluid>
      <Header typePage={typePage} />
      {children}
    </Container>
  );
}
