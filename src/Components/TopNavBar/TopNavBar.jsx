import React, { useContext, useState } from "react";
import { Types } from "../../consts/Types";
import { useNavigate } from "react-router-dom";

import { InputValueContext } from "../../consts/Contexts";
import {
  Container,
  Input,
  Wrapper,
  InputWrapper,
  IconSearch,
  Text,
  IconAdd,
  WrapperAdd,
  WrapperBackButton,
  WrapperCancelButton,
  TextButton,
  IconBack,
  IconDelete,
  WrapperDropDown,
  WrapperDropDownTitle,
  IconDropDown,
  DropDown,
  DropDownExpenseTitle,
  HeaderContainer,
  HeaderWrapper,
  FlexColumn,
  WrapperTableView,
} from "./TopNavBar.style";
import { DropDownFilter } from "../DropdownFilter/DropDownFilter";
import { useDispatch } from "react-redux";
import {
  ChangeListView,
  ClearCategory,
  GetCategory,
} from "../../Redux/Actions.jsx/ExpensesActions";
import { Icons } from "../../assets/images/index";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { useSelector } from "react-redux";

export function TopNavBar({ typePage }) {
  const listView = useSelector((state) => state.expenses.listView);
  const dispatch = useDispatch();
  const { inputSearchValue, setInputSearchValue } =
    useContext(InputValueContext);

  const navigate = useNavigate();

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCloseFilters() {
    setIsModalVisible(false);
  }
  // function handleOpenFilters() {
  //   setIsModalVisible(!isModalVisible);
  // }

  function handleValue(value) {
    setInputSearchValue(value);
  }

  function handleCategoryClick(category) {
    setFilteredCategory(category);

    dispatch(GetCategory(category));

    setIsDropDownVisible(false);
  }

  function handleCategoryDelete() {
    setFilteredCategory("");
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
          <Wrapper>
            <>
              <WrapperBackButton onClick={() => navigate("/")}>
                <IconBack
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"
                  alt="icon-back"
                />
                <TextButton>Back</TextButton>
              </WrapperBackButton>

              <WrapperCancelButton onClick={() => navigate("/")}>
                <IconDelete
                  src="https://cdn-icons-png.flaticon.com/512/66/66847.png"
                  alt="cancel"
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
            <FlexColumn>
              {listView.gridView ? (
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <InputWrapper>
                    <Input
                      placeholder="Search for expenses"
                      value={inputSearchValue}
                      onChange={(e) => handleValue(e.target.value)}
                    />
                    <IconSearch
                      src={require("../../assets/images/search-icon.webp")}
                      alt="search-icon"
                    />
                  </InputWrapper>

                  {/* //filter */}

                  <WrapperDropDown
                    onClick={() => setIsDropDownVisible(!isDropDownVisible)}
                  >
                    <WrapperDropDownTitle>
                      <Text>Filter by category</Text>
                      {filteredCategory.title && (
                        <img
                          onClick={handleCategoryDelete}
                          alt="delete-filter"
                          src={Icons.deleteFilter}
                          style={{ width: 18, cursor: "pointer" }}
                        />
                      )}
                    </WrapperDropDownTitle>

                    <IconDropDown
                      isDropDown={isDropDownVisible}
                      onClick={() => setIsDropDownVisible(!isDropDownVisible)}
                      src={require("../../assets/images/arrow-down.png")}
                      alt="arrow down"
                    />

                    <DropDown>
                      <DropDownExpenseTitle>
                        {filteredCategory.title}
                      </DropDownExpenseTitle>
                    </DropDown>

                    {isDropDownVisible && (
                      <DropDownFilter onCategoryClick={handleCategoryClick} />
                    )}
                  </WrapperDropDown>
                </div>
              ) : (
                <div style={{ width: "380px" }} />
              )}
            </FlexColumn>

            <div>
              <WrapperTableView
                onClick={() => {
                  const newView = listView.gridView
                    ? { tableView: true, gridView: false }
                    : { tableView: false, gridView: true };
                  dispatch(ChangeListView(newView));
                }}
              >
                <img
                  title={listView.gridView ? "table view" : "grid view"}
                  onClick={() => {
                    const newView = listView.gridView
                      ? { tableView: true, gridView: false }
                      : { tableView: false, gridView: true };
                    dispatch(ChangeListView(newView));
                  }}
                  alt="views"
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

              <WrapperAdd onClick={() => navigate("/add-expense")}>
                <IconAdd
                  title="add new expense"
                  src={require("../../assets/images/add.png")}
                  alt="icon-Add"
                />
                <Text>Add</Text>
              </WrapperAdd>
            </div>
          </HeaderWrapper>
        </HeaderContainer>
      )}
    </>
  );
}
