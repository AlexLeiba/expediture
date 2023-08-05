import React from "react";
import { ExpenseList } from "../../Components/ExpenseList/ExpenseList";
import { MainLayout } from "../../Components/MainLayout/MainLayout";
import { Types } from "../../consts/Types";
import { Container } from "./Home.style";

export const Home = () => {
  return (
    <MainLayout typePage={Types.HOME}>
      <Container>
        <ExpenseList />
      </Container>
    </MainLayout>
  );
};
