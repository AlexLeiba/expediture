import React from 'react';
import { Wrapper } from './Header.style';
import { TopNavBar } from '../TopNavBar/TopNavBar';
import { Container } from '../Grid/Grid.style';

export function Header({ typePage }) {
  return (
    <Container fluid style={{ backgroundColor: '#70bbbb' }}>
      <Container>
        <Wrapper>
          <TopNavBar typePage={typePage} />
        </Wrapper>
      </Container>
    </Container>
  );
}
