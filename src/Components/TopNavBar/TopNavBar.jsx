import React, { useState } from 'react';
import { Types } from '../../consts/Types';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Wrapper,
  Text,
  IconAdd,
  WrapperBackButton,
  WrapperCancelButton,
  TextButton,
  IconBack,
  IconDelete,
  HeaderContainer,
  HeaderWrapper,
  WrapperTableView,
  ButtonsWrapper,
  WrapperAddButton,
  SearchWrapper,
  DropdownWrapper,
} from './TopNavBar.style';

import { useDispatch } from 'react-redux';
import {
  ChangeListView,
  ClearCategory,
  GetCategory,
} from '../../Redux/Actions.jsx/ExpensesActions';
import { Icons } from '../../assets/images/index';
import { SuccessModal } from '../SuccessModal/SuccessModal';
import { useSelector } from 'react-redux';
import { SearchExpense } from '../../Redux/Actions.jsx/ExpensesActions';
import { FilterByCategoryDropdown } from '../FilterByCategoryDropdown/FilterByCategoryDropdown';
import { Input } from '../UI/Input/Input';

export function TopNavBar({ typePage }) {
  const listView = useSelector((state) => state.expenses.listView);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchTerm = useSelector((state) => state.expenses.filters.byName);

  const [filteredCategory, setFilteredCategory] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCloseFilters() {
    setIsModalVisible(false);
  }
  // function handleOpenFilters() {
  //   setIsModalVisible(!isModalVisible);
  // }

  function handleValue(value) {
    dispatch(SearchExpense(value));
  }

  function handleCategoryClick(category) {
    setFilteredCategory(category);

    dispatch(GetCategory(category));
  }

  function handleCategoryDelete() {
    setFilteredCategory('');
    dispatch(ClearCategory());
  }

  return (
    <>
      <SuccessModal
        handleCategoryClick={handleCategoryClick}
        isVisible={isModalVisible}
        handleClose={handleCloseFilters}
        modalType={Types.FILTER}
      />

      {typePage === Types.ADD_EXPENSES && (
        <Container>
          {/*HEADER BUTTONS  */}
          <Wrapper>
            <>
              <WrapperBackButton onClick={() => navigate('/')}>
                <IconBack
                  src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png'
                  alt='icon-back'
                />
                <TextButton>Back</TextButton>
              </WrapperBackButton>

              <WrapperCancelButton onClick={() => navigate('/')}>
                <IconDelete
                  src='https://cdn-icons-png.flaticon.com/512/66/66847.png'
                  alt='cancel'
                />
                <TextButton>Cancel</TextButton>
              </WrapperCancelButton>
            </>
          </Wrapper>
        </Container>
      )}

      {typePage === Types.HOME && (
        <HeaderContainer>
          <HeaderWrapper>
            {listView.gridView ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  flexWrap: 'wrap',
                  columnGap: '10px',
                  rowGap: '10px',
                  marginBottom: '10px',
                }}
              >
                <SearchWrapper>
                  <Input
                    placeholder='Search for expenses'
                    value={searchTerm}
                    handleInputValues={handleValue}
                    inputType='search'
                  />
                </SearchWrapper>
                <DropdownWrapper>
                  <FilterByCategoryDropdown
                    filteredCategory={filteredCategory}
                    handleCategoryDelete={handleCategoryDelete}
                    handleCategoryClick={handleCategoryClick}
                  />
                </DropdownWrapper>
              </div>
            ) : (
              <div style={{ height: '62px' }} />
            )}

            {/* ////ICONS */}
            <ButtonsWrapper tableType={listView.tableView}>
              <WrapperTableView
                onClick={() => {
                  const newView = listView.gridView
                    ? { tableView: true, gridView: false }
                    : { tableView: false, gridView: true };
                  dispatch(ChangeListView(newView));
                }}
              >
                <img
                  title={listView.gridView ? 'table view' : 'grid view'}
                  onClick={() => {
                    const newView = listView.gridView
                      ? { tableView: true, gridView: false }
                      : { tableView: false, gridView: true };
                    dispatch(ChangeListView(newView));
                  }}
                  alt='views'
                  src={listView.gridView ? Icons.tableView : Icons.gridView}
                  style={{ width: 18 }}
                />
              </WrapperTableView>
              {/* {listView.gridView && (
                    <WrapperAdd onClick={() => handleOpenFilters()}>
                      <img
                        title="filters"
                        onClick={() => handleOpenFilters()}
                        alt="filter"
                        src={Icons.filter}
                        style={{ width: 23 }}
                      />
                    </WrapperAdd>
                  )} */}

              <WrapperAddButton onClick={() => navigate('/add-expense')}>
                <IconAdd
                  title='add new expense'
                  src={require('../../assets/images/add.png')}
                  alt='icon-Add'
                />
                <Text>Add</Text>
              </WrapperAddButton>
            </ButtonsWrapper>
          </HeaderWrapper>
        </HeaderContainer>
      )}
    </>
  );
}
