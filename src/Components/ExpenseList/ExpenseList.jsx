import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Container, FlexStartWrapper } from './ExpenseList.style';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment/moment';
import { DeleteExpense } from '../../Redux/Actions.jsx/ExpensesActions';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';
import { Spacer } from '../UI/Spacer';
import { Row, Col } from '../Grid/Grid.style';
import { ExpensesTable } from './ExpensesTable';

export function ExpenseList() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.expenses.filters.byName);

  const { expenseList } = useSelector((state) => state.expenses);

  const dataCategory = useSelector((state) => state.expenses.filters.category);
  const listView = useSelector((state) => state.expenses.listView);

  const [totalExpense, setTotalExpense] = useState(0);
  const [todaysExpense, setTodaysExpense] = useState(0);

  const [newExpense, setNewExpense] = useState([]);
  const [oldExpense, setOldExpense] = useState([]);

  const filteredByCategoryList = expenseList.filter((data) => {
    if (dataCategory && dataCategory.title !== '') {
      return data.category.title === dataCategory.title;
    }

    return data;
  });

  const filteredSearchList = filteredByCategoryList.filter((data) => {
    return data.title.includes(searchTerm);
  });

  function handleRemove(id) {
    dispatch(DeleteExpense(id));
    toast('Expense removed successfully!', {
      type: 'success',
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

    const formatedCurrentDate = format(new Date(), 'PP');

    filteredSearchList.forEach((data) => {
      const formatedOldDate = format(new Date(data.createdAt), 'PP');
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
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      {listView.gridView && (
        <>
          {newExpense.length > 0 && (
            <>
              <div>
                <FlexStartWrapper>
                  <h5>Today's expenses:</h5>
                </FlexStartWrapper>

                <Row>
                  {newExpense.map((data, index) => {
                    const timeCreated = moment(data.createdAt).fromNow();
                    const dateCreated = format(
                      new Date(data.createdAt),
                      'dd/MM/yyyy'
                    );

                    return (
                      <Col
                        key={data.category.id + index}
                        lg={{ size: 1.9 }}
                        md={{ size: 12 }}
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
              <FlexStartWrapper>
                <h5>Total of today's Expenses: ${todaysExpense} </h5>
              </FlexStartWrapper>

              <Spacer margin={'10px'} />
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
                      'dd/MM/yyyy'
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

          {newExpense.length < 1 && oldExpense.length < 1 ? (
            <FlexStartWrapper>
              {expenseList.length > 0 ? (
                <h3 textAlign='center'>Nothing was found, try again</h3>
              ) : (
                <h3>
                  You have no expenses yet,
                  <br /> Please try to add an expense by clicking on +Add button
                  above then come back to see the results,
                  <br /> All your expenses will be stored in your browser so you
                  can use it for years!
                  <br /> <br /> Don't forget to try Table view as well which
                  comes with more filter posibilities, by clicking on table icon
                  above :)
                </h3>
              )}
            </FlexStartWrapper>
          ) : (
            <FlexStartWrapper>
              <h3 style={{ textAlign: 'left' }}>
                Total expenses: ${totalExpense ? totalExpense : 0} {''}
              </h3>
            </FlexStartWrapper>
          )}
        </>
      )}
      {listView.tableView && <ExpensesTable handleRemove={handleRemove} />}
    </Container>
  );
}
