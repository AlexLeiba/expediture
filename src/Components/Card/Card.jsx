import React from "react";
import {
  Container,
  TextCreatedAt,
  TextTitle,
  Logo,
  IconRemove,
  TextQuantity,
  Wrapper,
  WrapperRemoveAndQuantity,
  VerticalLine,
  IconMoney,
  WrapperQuantityAndDollar,
} from "./Card.style";

export function Card({
  color,
  title,
  logoUrl,
  createdAt,
  amount,
  handleRemove,
  newExpenses,
}) {
  return (
    <Container newExpenses>
      <Wrapper>
        <Logo src={logoUrl ? logoUrl : ""} />

        <div>
          <TextTitle>{title ? title : ""}</TextTitle>
          <TextCreatedAt>{createdAt ? createdAt : ""}</TextCreatedAt>
        </div>
      </Wrapper>

      <WrapperRemoveAndQuantity>
        <IconRemove
          onClick={() => handleRemove()}
          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
          alt="remove"
        />

        {amount && (
          <WrapperQuantityAndDollar>
            <IconMoney
              src={require("../../assets/images/dollar.png")}
              alt="dollar"
            />
            <TextQuantity>{amount ? amount : ""}</TextQuantity>
          </WrapperQuantityAndDollar>
        )}
      </WrapperRemoveAndQuantity>

      <VerticalLine backgroundColor={color ? color : "black"} />
    </Container>
  );
}
