import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Container } from "./ExpenseList.style";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import { DeleteExpense } from "../../Redux/Actions.jsx/ExpensesActions";
import { ToastContainer, toast } from "react-toastify";

export function ExpenseList() {
  const [totalExpense, setTotalExpense] = useState("");
  const expenseData = useSelector((state) => state.expenses);

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(DeleteExpense(id));
    toast("Expense removed successfully!");
  }

  function handleTotalCost() {
    for (let index = 0; index < expenseData.expenseList.length; index++) {
      let totalCost = 0;
      expenseData.expenseList.forEach((data) => {
        totalCost = totalCost + parseInt(data.amount);
      });
      setTotalExpense(totalCost);
    }
  }

  useEffect(() => {
    handleTotalCost();
  }, [expenseData.expenseList.length]);

  return (
    <Container>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {expenseData.expenseList.length > 0 ? (
        expenseData.expenseList.map((data) => {
          const timeCreated = moment(data.createdAt).fromNow();

          return (
            <Card
              handleRemove={() => handleRemove(data.category.id)}
              color={data.category.color}
              key={data.category.id}
              logoUrl={data.category.icon}
              title={data.title}
              createdAt={timeCreated}
              amount={data.amount}
            />
          );
        })
      ) : (
        <h3>You have no expenses!</h3>
      )}

      <h3>
        Total expenses: {totalExpense} {""}
        <img
          width={"10px"}
          src={require("../../assets/images/dollar.png")}
          alt="dollar"
        />
      </h3>
    </Container>
  );
}
