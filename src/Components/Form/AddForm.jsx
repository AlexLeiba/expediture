import React, { useState } from "react";

import {
  Container,
  SubmitButton,
  IconPlane,
  InputWrapper,
} from "./AddForm.style";
import { useDispatch } from "react-redux";
import { AddExpense } from "../../Redux/Actions.jsx/ExpensesActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";
import { Input } from "../UI/Input/Input";
import { Spacer } from "../UI/Spacer/Spacer";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import useKeypress from "react-use-keypress";

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
    cost: "",
  });

  useKeypress("Enter", () => {
    handleSubmit();
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
    if (inputValue.title === "" || !category.title || inputValue.cost === 0) {
      toast("Please enter valid data!", { type: "error" });
    } else {
      const data = {
        title: inputValue.title,
        cost: Number(inputValue.cost),
        category: category,
        createdAt: new Date(),
      };

      toast("New expense was added successfully!", { type: "success" });

      dispatch(AddExpense(data));

      setCategory({});
      setIsModalVisible(true);
    }
  }

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
        <Input
          label="Title"
          inputType="title"
          value={inputValue.title}
          handleInputValues={handleInputValues}
          placeholder="give a name to your expediture"
        />
      </InputWrapper>

      <Spacer margin={20} />

      <InputWrapper>
        <Input
          label="Cost"
          inputType="cost"
          type={"number"}
          value={inputValue.cost}
          handleInputValues={handleInputValues}
          placeholder="Enter cost"
        />
      </InputWrapper>

      <Spacer margin={20} />

      <Dropdown
        setIsDropDownVisible={setIsDropDownVisible}
        onCategoryClick={handleCategoryClick}
        isDropDownVisible={isDropDownVisible}
        categoryTitle={category.title}
      />

      <SubmitButton onClick={() => handleSubmit()}>
        <h4>Submit</h4>
        <IconPlane src={require("../../assets/images/plane.png")} />
      </SubmitButton>
    </Container>
  );
}
