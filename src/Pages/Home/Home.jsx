import React from 'react';
import { ExpenseList } from '../../Components/ExpenseList/ExpenseList';
import { MainLayout } from '../../Components/MainLayout/MainLayout';
import { Types } from '../../consts/Types';
import { Container } from './Home.style';
import { useSelector } from 'react-redux';

export const Home = () => {
  const listView = useSelector((state) => state.expenses.listView);
  return (
    <MainLayout typePage={Types.HOME}>
      <Container tableView={listView.tableView}>
        <ExpenseList />
      </Container>
    </MainLayout>
  );
};
