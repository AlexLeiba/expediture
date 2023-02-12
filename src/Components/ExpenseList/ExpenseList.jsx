import React, { useEffect, useState, useContext } from "react";
import { Card } from "../Card/Card";
import { Container } from "./ExpenseList.style";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import { DeleteExpense } from "../../Redux/Actions.jsx/ExpensesActions";
import { ToastContainer, toast } from "react-toastify";
import { InputValueContext } from "../../consts/Contexts";
import { format } from "date-fns";
import { Spacer } from "../UI/Spacer";
import { Row, Col } from "../Grid/Grid.style";

export function ExpenseList() {
  const dispatch = useDispatch();

  const { inputSearchValue } = useContext(InputValueContext);

  const { expenseList } = useSelector((state) => state.expenses);

  const [totalExpense, setTotalExpense] = useState(0);
  const [todaysExpense, setTodaysExpense] = useState(0);

  const [newExpense, setNewExpense] = useState([]);
  const [oldExpense, setOldExpense] = useState([]);

  const filteredList = expenseList.filter((data) =>
    data.title.includes(inputSearchValue)
  );

  function handleRemove(id) {
    dispatch(DeleteExpense(id));
    toast("Expense removed successfully!", {
      type: "success",
    });
  }

  function handleTotalCost() {
    for (let index = 0; index <= filteredList.length; index++) {
      let totalCost = 0;
      filteredList.forEach((data) => {
        totalCost = totalCost + parseInt(data.amount);
      });
      setTotalExpense(totalCost);
    }
    for (let index = 0; index <= newExpense.length; index++) {
      let totalCost = 0;
      newExpense.forEach((data) => {
        totalCost = totalCost + parseInt(data.amount);
      });
      setTodaysExpense(totalCost);
    }
  }

  useEffect(() => {
    handleTotalCost();

    let oldExpense = [];
    let newExpense = [];

    const formatedCurrentDate = format(new Date(), "PP");

    filteredList.forEach((data) => {
      const formatedOldDate = format(new Date(data.createdAt), "PP");
      if (formatedCurrentDate === formatedOldDate) {
        newExpense.push(data);
      } else {
        oldExpense.push(data);
      }
    });
    setNewExpense(newExpense);
    setOldExpense(oldExpense);
  }, [filteredList.length, newExpense.length]);

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
        theme="light"
      />
      {newExpense.length > 0 && (
        <>
          <div>
            <h5>Today's expenses:</h5>
            <Row>
              {newExpense.map((data) => {
                const timeCreated = moment(data.createdAt).fromNow();

                return (
                  <Col lg={{ size: 1.5 }} md={{ size: 1.5 }} sm={{ size: 12 }}>
                    <Card
                      newExpenses
                      handleRemove={() => handleRemove(data.category.id)}
                      color={data.category.color}
                      key={data.category.id}
                      logoUrl={data.category.icon}
                      title={data.title}
                      createdAt={timeCreated}
                      amount={data.amount}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
          <h5 style={{ textAlign: "right" }}>
            Total of today's Expenses: {todaysExpense}{" "}
            <img
              width={"10px"}
              src={require("../../assets/images/dollar.png")}
              alt="dollar"
            />
          </h5>
          <Spacer margin={"10px"} />
        </>
      )}

      {oldExpense.length > 0 && (
        <>
          <h5>All expenses:</h5>
          {oldExpense
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((data) => {
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
            })}
        </>
      )}

      {newExpense.length < 1 && oldExpense.length < 1 && (
        <h3>You have no expenses!</h3>
      )}

      <h3 style={{ textAlign: "right" }}>
        Total expenses: {totalExpense ? totalExpense : 0} {""}
        <img
          width={"10px"}
          src={require("../../assets/images/dollar.png")}
          alt="dollar"
        />
      </h3>
    </Container>
  );
}
