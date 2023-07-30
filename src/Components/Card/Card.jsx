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
  dateCreated,
}) {
  return (
    <Container newExpenses>
      <Wrapper>
        <Logo src={logoUrl ? logoUrl : ""} />

        <div>
          <TextTitle>{title ? title : ""}</TextTitle>
          <div
            style={{
              display: "flex",
            }}
          >
            <TextCreatedAt>{createdAt ? createdAt : ""}</TextCreatedAt>
          </div>
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

        <TextCreatedAt>{dateCreated ? dateCreated : ""}</TextCreatedAt>
      </WrapperRemoveAndQuantity>

      <VerticalLine backgroundColor={color ? color : "black"} />
    </Container>
  );
}
