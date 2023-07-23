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
  FlexBetween,
} from "./TopNavBar.style";
import { DropDownList } from "../DropList/DropDownList";
import { DropDownFilter } from "../DropdownFilter/DropDownFilter";

export function TopNavBar({ typePage }) {
  const { inputSearchValue, setInputSearchValue } =
    useContext(InputValueContext);

  const navigate = useNavigate();

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  function handleValue(value) {
    setInputSearchValue(value);
  }

  function handleCategoryClick(category, newId) {
    // setCategory((prevData) => ({
    //   ...prevData,
    //   title: category.title,
    //   id: newId,
    //   icon: category.icon,
    //   color: category.color,
    // }));
    setIsDropDownVisible(false);
  }

  return (
    <Container>
      <Wrapper>
        {typePage === Types.HOME && (
          <>
            <FlexBetween>
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
              <WrapperDropDown>
                <WrapperDropDownTitle>
                  <Text>Filter by category</Text>
                </WrapperDropDownTitle>

                <IconDropDown
                  isDropDown={isDropDownVisible}
                  onClick={() => setIsDropDownVisible(!isDropDownVisible)}
                  src={require("../../assets/images/arrow-down.png")}
                  alt="arrow down"
                />

                <DropDown>
                  {/* <DropDownExpenseTitle>{category.title}</DropDownExpenseTitle> */}
                </DropDown>

                {isDropDownVisible && (
                  <DropDownFilter onCategoryClick={handleCategoryClick} />
                )}
              </WrapperDropDown>
            </FlexBetween>

            <WrapperAdd onClick={() => navigate("/add-expense")}>
              <IconAdd
                src={require("../../assets/images/add.png")}
                alt="icon-Add"
              />
              <Text>Add</Text>
            </WrapperAdd>
          </>
        )}

        {typePage === Types.ADD_EXPENSES && (
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
        )}
      </Wrapper>
    </Container>
  );
}
