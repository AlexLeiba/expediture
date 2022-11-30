import React from "react";
import { ExpenseList } from "../../Components/ExpenseList/ExpenseList";
import { MainLayout } from "../../Components/MainLayout/MainLayout";
import { TopNavBar } from "../../Components/TopNavBar/TopNavBar";
import { Types } from "../../consts/Types";
import { Container } from "./Home.style";

export const Home = () => {
  return (
    <MainLayout>
      <TopNavBar typePage={Types.HOME} />
      <Container>
        <ExpenseList />
      </Container>
    </MainLayout>
  );
};
