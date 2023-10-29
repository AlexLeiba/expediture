import React, { useState } from 'react';
import {
  Container,
  Icon,
  Wrapper,
  Text,
  LogoCard,
  LogoGit,
  ContainerLogoCard,
} from './Header.style';
import { TopNavBar } from '../TopNavBar/TopNavBar';
import { useNavigate } from 'react-router-dom';

export function Header({ typePage }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <ContainerLogoCard onClick={() => navigate('/')}>
          <Text>Expenses</Text>
          <LogoCard>
            <Icon
              src={require('../../assets/images/card.png')}
              alt='credit-card'
            />
          </LogoCard>
        </ContainerLogoCard>
        <a href='https://github.com/join/get-started'>
          <LogoGit>
            <Icon
              src={require('../../assets/images/GitHub.png')}
              alt='credit-card'
            />
          </LogoGit>
        </a>
      </Wrapper>
      <TopNavBar typePage={typePage} />
    </Container>
  );
}
