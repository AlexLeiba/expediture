import React, { useState } from "react";
import { DropDownList } from "../DropList/DropDownList";
import {
  Container,
  InputTitle,
  InputAmount,
  InputWrapper,
  Text,
  WrapperText,
  IconMoney,
  DropDown,
  WrapperDropDown,
  IconDropDown,
  WrapperDropDownTitle,
  SubmitButton,
  IconPlane,
} from "./AddForm.style";
import { useDispatch } from "react-redux";
import { AddExpense } from "../../Redux/Actions.jsx/ExpensesActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";

export function AddForm() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState({
    title: "",
    id: "",
    icon: "",
    color: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    title: "",
    amount: 0,
  });

  function handleInputValues(name, value) {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleCategoryClick(category) {
    setCategory(category);
    setIsDropDownVisible(false);
  }

  function handleSubmit() {
    if (
      inputValue.title === "" ||
      category.title === "" ||
      inputValue.amount === 0
    ) {
      toast("Please enter valid data!");
    } else {
      const data = {
        title: inputValue.title,
        amount: inputValue.amount,
        category: category,
        createdAt: new Date(),
      };
      dispatch(AddExpense(data));
      setIsModalVisible(true);
    }
  }

  function handleModalVisible() {
    navigate("/");
    setIsModalVisible(false);
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
        theme="light"
      />
      <SuccessModal
        isVisible={isModalVisible}
        handleCloseModal={handleModalVisible}
      />

      <InputWrapper>
        <WrapperText>
          <Text>Title:</Text>
        </WrapperText>

        <InputTitle
          value={inputValue.title}
          onChange={(e) => handleInputValues("title", e.target.value)}
          placeholder="give a name to your expediture"
        />
      </InputWrapper>
      <InputWrapper>
        <WrapperText>
          <Text>Amount:</Text>
          <IconMoney
            src="https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-dollar-symbol-signs-icons-1.png"
            alt="dollar"
          />
        </WrapperText>
        <InputAmount
          type={"number"}
          value={inputValue.amount}
          onChange={(e) => handleInputValues("amount", e.target.value)}
          placeholder="Enter amount"
        />
      </InputWrapper>

      <WrapperDropDown>
        <WrapperDropDownTitle>
          <Text>Choose type</Text>
        </WrapperDropDownTitle>

        <IconDropDown
          onClick={() => setIsDropDownVisible(!isDropDownVisible)}
          src="https://static.thenounproject.com/png/1123247-200.png"
          alt="dollar"
        />

        <DropDown />

        {isDropDownVisible && (
          <DropDownList onCategoryClick={handleCategoryClick} />
        )}
      </WrapperDropDown>

      <SubmitButton onClick={() => handleSubmit()}>
        <Text>Submit</Text>
        <IconPlane src="https://cdn-icons-png.flaticon.com/512/3388/3388641.png" />
      </SubmitButton>
    </Container>
  );
}
