import React from "react";
import { MainLayout } from "../../Components/MainLayout/MainLayout";
import { TopNavBar } from "../../Components/TopNavBar/TopNavBar";
import { Types } from "../../consts/Types";

export function AddExpenses() {
  return (
    <MainLayout>
      <TopNavBar typePage={Types.ADD_EXPENSES} />
      <div style={{ height: "100%" }}>Add expenses</div>
    </MainLayout>
  );
}
