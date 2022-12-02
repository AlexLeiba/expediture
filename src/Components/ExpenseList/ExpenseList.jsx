import React from "react";
import { Card } from "../Card/Card";
import { Container } from "./ExpenseList.style";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import { DeleteExpense } from "../../Redux/Actions.jsx/ExpensesActions";
import { ToastContainer, toast } from "react-toastify";

export function ExpenseList() {
  const expenseData = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(DeleteExpense(id));
    toast("Expense removed successfully!");
  }

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
          console.log(data);

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
    </Container>
  );
}
