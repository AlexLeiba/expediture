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
              src={require("../../assets/images/card.png")}
              alt="credit-card"
            />
          </LogoCard>
        </ContainerLogoCard>
        <a href="https://github.com/join/get-started">
          <LogoGit>
            <Icon
              src={require("../../assets/images/GitHub.png")}
              alt="credit-card"
            />
          </LogoGit>
        </a>
      </Wrapper>
    </Container>
  );
}
