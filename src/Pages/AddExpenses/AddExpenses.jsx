import React from "react";
import { AddForm } from "../../Components/Form/AddForm";
import { MainLayout } from "../../Components/MainLayout/MainLayout";
import { TopNavBar } from "../../Components/TopNavBar/TopNavBar";
import { Types } from "../../consts/Types";
import { Wrapper } from "./AddExpenses.style";

export function AddExpenses() {
  return (
    <MainLayout>
      <TopNavBar typePage={Types.ADD_EXPENSES} />
      <Wrapper>
        <AddForm />
      </Wrapper>
    </MainLayout>
  );
}
