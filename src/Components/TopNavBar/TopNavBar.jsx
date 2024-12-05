import React, { useState } from 'react';
import { Types } from '../../consts/Types';
import { useNavigate } from 'react-router-dom';

import {
  // Container,
  Wrapper,
  IconsHeader,
  WrapperBackButton,
  WrapperCancelButton,
  TextButton,
  IconBack,
  IconDelete,
  HeaderContainer,
  HeaderWrapper,
  ButtonsWrapper,
  WrapperIconsHeader,
  SearchWrapper,
  DropdownWrapper,
  FiltersWrapper,
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
import { Container } from '../Grid/Grid.style';

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
        // <Container>
        <Container>
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
            <FiltersWrapper
              style={{ visibility: listView.gridView ? 'visible' : 'hidden' }}
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
            </FiltersWrapper>

            {/* ICONS */}
            <ButtonsWrapper tableType={listView.tableView}>
              <WrapperIconsHeader
                onClick={() => {
                  const newView = listView.gridView
                    ? { tableView: true, gridView: false }
                    : { tableView: false, gridView: true };
                  dispatch(ChangeListView(newView));
                }}
              >
                <IconsHeader
                  title={listView.gridView ? 'table view' : 'grid view'}
                  onClick={() => {
                    const newView = listView.gridView
                      ? { tableView: true, gridView: false }
                      : { tableView: false, gridView: true };
                    dispatch(ChangeListView(newView));
                  }}
                  alt='views'
                  src={listView.gridView ? Icons.tableView : Icons.gridView}
                />
              </WrapperIconsHeader>

              <WrapperIconsHeader onClick={() => navigate('/add-expense')}>
                <IconsHeader
                  title='add new expense'
                  src={require('../../assets/images/add.png')}
                  alt='icon-Add'
                />
              </WrapperIconsHeader>
            </ButtonsWrapper>
          </HeaderWrapper>
        </HeaderContainer>
      )}
    </>
  );
}
