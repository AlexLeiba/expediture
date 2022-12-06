import React, { useState } from "react";
import { Types } from "../../consts/Types";
import { useNavigate } from "react-router-dom";
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
} from "./TopNavBar.style";

export function TopNavBar({ typePage }) {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function handleValue(value) {
    setInputValue(value);
  }

  return (
    <Container>
      <Wrapper>
        {typePage === Types.HOME && (
          <>
            <InputWrapper>
              <Input
                placeholder="Search for expenses"
                value={inputValue}
                onChange={(e) => handleValue(e.target.value)}
              />
              <IconSearch
                src={require("../../assets/images/search-icon.webp")}
                alt="search-icon"
              />
            </InputWrapper>

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
