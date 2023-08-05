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
  WrapperQuantity,
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
          <TextTitle>
            {title
              ? title.length > 25
                ? title.substring(1, 25) + "..."
                : title
              : ""}
          </TextTitle>
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
          <WrapperQuantity>
            <IconMoney
              src={require("../../assets/images/dollar.png")}
              alt="dollar"
            />
            <TextQuantity>{amount ? amount : ""}</TextQuantity>
          </WrapperQuantity>
        )}

        <TextCreatedAt>{dateCreated ? dateCreated : ""}</TextCreatedAt>
      </WrapperRemoveAndQuantity>

      <VerticalLine backgroundColor={color ? color : "black"} />
    </Container>
  );
}
