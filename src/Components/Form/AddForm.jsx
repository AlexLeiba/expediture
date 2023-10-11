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
  DropDownExpenseTitle,
  InputWrapperCost,
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
    amount: "",
  });

  function handleInputValues(name, value) {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleCategoryClick(category, newId) {
    setCategory((prevData) => ({
      ...prevData,
      title: category.title,
      id: newId,
      icon: category.icon,
      color: category.color,
    }));
    setIsDropDownVisible(false);
  }

  function handleSubmit() {
    if (
      inputValue.title === "" ||
      category.title === undefined ||
      inputValue.amount === 0
    ) {
      toast("Please enter valid data!", { type: "error" });
    } else {
      const data = {
        title: inputValue.title,
        amount: inputValue.amount,
        category: category,
        createdAt: new Date(),
      };
      dispatch(AddExpense(data));

      setCategory({});
      setIsModalVisible(true);
    }
  }

  // useEffect(() => {
  //   window.addEventListener("keypress", (e) => {
  //     if (e.key === "Enter") {
  //       handleSubmit();
  //     }
  //   });
  // }, []);

  function handleModalVisible() {
    navigate("/");
    setIsModalVisible(false);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Container>
      <ToastContainer
        position="top-center"
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
        handleClose={handleCloseModal}
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
      <InputWrapperCost>
        <WrapperText>
          <Text>Cost:</Text>
          <IconMoney
            src={require("../../assets/images/dollar.png")}
            alt="dollar"
          />
        </WrapperText>
        <InputAmount
          type={"number"}
          value={inputValue.amount}
          onChange={(e) => handleInputValues("amount", e.target.value)}
          placeholder="Enter cost"
        />
      </InputWrapperCost>

      <WrapperDropDown onClick={() => setIsDropDownVisible(!isDropDownVisible)}>
        <WrapperDropDownTitle>
          <Text>Choose type</Text>
        </WrapperDropDownTitle>

        <IconDropDown
          isDropDown={isDropDownVisible}
          onClick={() => setIsDropDownVisible(!isDropDownVisible)}
          src={require("../../assets/images/arrow-down.png")}
          alt="arrow down"
        />

        <DropDown>
          <DropDownExpenseTitle>{category.title}</DropDownExpenseTitle>
        </DropDown>

        {isDropDownVisible && (
          <DropDownList onCategoryClick={handleCategoryClick} />
        )}
      </WrapperDropDown>

      <SubmitButton onClick={() => handleSubmit()}>
        <Text>Submit</Text>
        <IconPlane src={require("../../assets/images/plane.png")} />
      </SubmitButton>
    </Container>
  );
}
