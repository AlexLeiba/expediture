import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  height: 500px;
  box-shadow: 5px 10px 10px #5eb5b3;
  background-color: #69bfbd; ;
`;

export const InputTitle = styled.input`
  width: 50%;
  border-radius: 4px;
  border: none;
  padding: 4px 37px 4px 35px;
  font-size: 12px;
  outline: none;
  margin: 20px 0 0 15px;
`;
export const InputAmount = styled.input`
  width: 50%;
  border-radius: 4px;
  border: none;
  padding: 4px 10px 4px 49px;
  font-size: 12px;
  outline: none;
  margin: 20px 0 0 15px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Text = styled.h1`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 2px 4px 2px 4px;
`;

export const WrapperText = styled.div`
  position: absolute;
  top: 21px;
  left: 16px;
  background-color: #9ebaba;
  border-radius: 4px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperAdd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 3px 0 3px;
  height: 18px;
  cursor: pointer;
`;

export const IconMoney = styled.img`
  width: 7px;
  height: 7px;
  margin-right: 5px;
`;

export const WrapperDropDown = styled.div`
  width: 100%;
  margin: 25px 0 0 15px;
  position: relative;
`;

export const WrapperDropDownTitle = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #9ebaba;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropDown = styled.div`
  width: 50%;
  height: 20px;
  background-color: #ffffff;
  margin-top: 25px;
  z-index: 2;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 50%;
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  display: flex;
  justify-context: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px 5px 0;
`;

export const IconPlane = styled.img`
  width: 10px;
  height: 10px;
`;

export const DropDownExpenseTitle = styled.h1`
  font-size: 13px;
  position: absolute;
  left: 70px;
  top: -6px;
`;
