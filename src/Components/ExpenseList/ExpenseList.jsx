import React from "react";
import { Card } from "../Card/Card";
import { Container } from "./ExpenseList.style";
import { useSelector } from "react-redux";

export function ExpenseList() {
  const expenseData = useSelector((state) => state.expenses);

  console.log(expenseData);

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

  // const colors = ["red", "yellow", "green", "blue", "purple", "gray"];

  return (
    <Container>
      {expenseData.expenseList.length > 0 &&
        expenseData.expenseList.map((data, index) => {
          // const colorsIndex = colors[index % colors.length];
          return (
            <Card
              color={data.category.color}
              key={data.category.id}
              logoUrl={data.category.icon}
              title={data.title}
              // createdAt={data.createdAt}
              amount={data.amount}
            />
          );
        })}
    </Container>
  );
}
