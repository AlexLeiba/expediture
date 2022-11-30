import React from "react";
import {
  Container,
  Icon,
  Wrapper,
  Text,
  LogoCard,
  LogoGit,
  ContainerLogoCard,
} from "./Header.style";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <ContainerLogoCard>
          <Text>Expenses</Text>
          <LogoCard>
            <Icon
              src="https://cdn-icons-png.flaticon.com/512/62/62780.png"
              alt="credit-card"
            />
          </LogoCard>
        </ContainerLogoCard>
        <a href="https://github.com/join/get-started">
          <LogoGit>
            <Icon
              src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
              alt="credit-card"
            />
          </LogoGit>
        </a>
      </Wrapper>
    </Container>
  );
}
