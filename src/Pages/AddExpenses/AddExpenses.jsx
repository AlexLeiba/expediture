import React from "react";
import { AddForm } from "../../Components/Form/AddForm";
import { MainLayout } from "../../Components/MainLayout/MainLayout";
import { Types } from "../../consts/Types";
import { Wrapper } from "./AddExpenses.style";

export function AddExpenses() {
  return (
    <MainLayout typePage={Types.ADD_EXPENSES}>
      <Wrapper>
        <AddForm />
      </Wrapper>
    </MainLayout>
  );
}
