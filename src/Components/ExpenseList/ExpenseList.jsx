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
import { ExpensesTable } from "./ExpensesTable";

export function ExpenseList() {
  const dispatch = useDispatch();

  const { inputSearchValue } = useContext(InputValueContext);

  const { expenseList } = useSelector((state) => state.expenses);

  const dataCategory = useSelector((state) => state.expenses.filters.category);
  const listView = useSelector((state) => state.expenses.listView);

  const [totalExpense, setTotalExpense] = useState(0);
  const [todaysExpense, setTodaysExpense] = useState(0);

  const [newExpense, setNewExpense] = useState([]);
  const [oldExpense, setOldExpense] = useState([]);
  // const [listView, setListView] = useState({
  //   gridView: false,
  //   tableView: true,
  // });

  const filteredByCategoryList = expenseList.filter((data) => {
    if (dataCategory && dataCategory.title !== "") {
      return data.category.title === dataCategory.title;
    }

    return data;
  });

  const filteredSearchList = filteredByCategoryList.filter((data) => {
    return data.title.includes(inputSearchValue);
  });

  function handleRemove(id) {
    dispatch(DeleteExpense(id));
    toast("Expense removed successfully!", {
      type: "success",
    });
  }

  function handleTotalCost() {
    for (let index = 0; index <= filteredSearchList.length; index++) {
      let totalCost = 0;
      filteredSearchList.forEach((data) => {
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

    filteredSearchList.forEach((data) => {
      const formatedOldDate = format(new Date(data.createdAt), "PP");
      if (formatedCurrentDate === formatedOldDate) {
        newExpense.push(data);
      } else {
        oldExpense.push(data);
      }
    });
    setNewExpense(newExpense);
    setOldExpense(oldExpense);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredSearchList.length, newExpense.length]);

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {listView.gridView && (
        <>
          {newExpense.length > 0 && (
            <>
              <div>
                <h5>Today's expenses:</h5>
                <Row>
                  {newExpense.map((data, index) => {
                    const timeCreated = moment(data.createdAt).fromNow();
                    const dateCreated = format(
                      new Date(data.createdAt),
                      "dd/MM/yyyy"
                    );

                    return (
                      <Col
                        key={data.category.id + index}
                        lg={{ size: 2 }}
                        md={{ size: 2 }}
                        sm={{ size: 12 }}
                      >
                        <Card
                          newExpenses
                          handleRemove={() => handleRemove(data.category.id)}
                          color={data.category.color}
                          key={data.category.id}
                          logoUrl={data.category.icon}
                          title={data.title}
                          createdAt={timeCreated}
                          dateCreated={dateCreated}
                          amount={data.amount}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <Row flexEnd>
                <h5 style={{ textAlign: "right" }}>
                  Total of today's Expenses: ${todaysExpense}{" "}
                </h5>
              </Row>

              <Spacer margin={"10px"} />
            </>
          )}

          {oldExpense.length > 0 && (
            <>
              <h5>All expenses:</h5>
              <Row>
                {oldExpense
                  .sort((a, b) => a.createdAt - b.createdAt)
                  .map((data, index) => {
                    const timeCreated = moment(data.createdAt).fromNow();

                    const dateCreated = format(
                      new Date(data.createdAt),
                      "dd/MM/yyyy"
                    );

                    return (
                      <Col
                        lg={{ size: 2 }}
                        md={{ size: 2 }}
                        sm={{ size: 12 }}
                        key={data.category.id + index}
                      >
                        <Card
                          handleRemove={() => handleRemove(data.category.id)}
                          color={data.category.color}
                          key={data.category.id}
                          logoUrl={data.category.icon}
                          title={data.title}
                          createdAt={timeCreated}
                          dateCreated={dateCreated}
                          amount={data.amount}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </>
          )}
          <Row flexEnd>
            {newExpense.length < 1 && oldExpense.length < 1 ? (
              <h3>You have no expenses!</h3>
            ) : (
              <h3 style={{ textAlign: "right" }}>
                Total expenses: ${totalExpense ? totalExpense : 0} {""}
              </h3>
            )}
          </Row>
        </>
      )}
      {listView.tableView && <ExpensesTable handleRemove={handleRemove} />}
    </Container>
  );
}
