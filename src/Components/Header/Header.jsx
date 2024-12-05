import React from 'react';
import {
  // Container,
  Icon,
  Wrapper,
  Text,
  LogoCard,
  LogoGit,
  ContainerLogoCard,
} from './Header.style';
import { TopNavBar } from '../TopNavBar/TopNavBar';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Grid/Grid.style';

export function Header({ typePage }) {
  const navigate = useNavigate();
  return (
    <Container fluid style={{ backgroundColor: '#70bbbb' }}>
      <Container>
        <Wrapper>
          <ContainerLogoCard title='home' onClick={() => navigate('/')}>
            <Text>Expenses</Text>
            <LogoCard>
              <Icon
                src={require('../../assets/images/card.png')}
                alt='credit-card'
              />
            </LogoCard>
          </ContainerLogoCard>

          {/*SEARCH NAV BAR */}
          <TopNavBar typePage={typePage} />

          {/* <div>
          <a href='https://github.com/join/get-started' title='my github'>
            <LogoGit>
              <Icon
                src={require('../../assets/images/GitHub.png')}
                alt='credit-card'
              />
            </LogoGit>
          </a>
        </div> */}
        </Wrapper>
      </Container>
    </Container>
  );
}
