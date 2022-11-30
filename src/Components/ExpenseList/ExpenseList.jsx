import React from "react";
import { Card } from "../Card/Card";
import { Container } from "./ExpenseList.style";

export function ExpenseList() {
  const list = [
    {
      title: "title",
      logoUrl:
        "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-cancel-icon-png-image_533028.jpg",
      createdAt: Date.now(),
      amount: 121212,
    },
    {
      title: "title",
      logoUrl:
        "https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-cancel-icon-png-image_533028.jpg",
      createdAt: Date.now(),
      amount: 121212,
    },
  ];

  const colors = ["red", "yellow", "green", "blue", "purple", "gray"];

  return (
    <Container>
      {list.map((data, index) => {
        const colorsIndex = colors[index % colors.length];
        return (
          <Card
            color={colorsIndex}
            key={index}
            logoUrl={data.logoUrl}
            title={data.title}
            createdAt={data.createdAt}
            amount={data.amount}
          />
        );
      })}
    </Container>
  );
}
