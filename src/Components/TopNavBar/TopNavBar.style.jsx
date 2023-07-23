import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconSearch = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 6px;
  left: 5px;
`;

export const IconDelete = styled.img`
  width: auto;
  height: 12px;
  margin-right: 3px;
`;

export const IconAdd = styled.img`
  width: 10px;
  height: 10px;
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
  z-index: 3;
`;

export const Text = styled.h1`
  font-size: 10px;
  margin-right: 2px;
`;

export const TextButton = styled.h1`
  font-size: 10px;
  font-weight: 400;
`;

export const InputWrapper = styled.div`
  width: 30%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 4px 20px 4px 20px;
  font-size: 12px;
  outline: none;
`;

export const IconBack = styled.img`
  width: 16px;
  height: 16px;
`;

export const WrapperBackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 3px 0 0;
  height: 18px;
  cursor: pointer;
`;

export const WrapperCancelButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 3px 0 3px;
  height: 18px;
  cursor: pointer;
`;

export const WrapperDropDown = styled.div`
  width: 250px;
  position: absolute;
  right: 0;
  z-index: 2;
`;

export const WrapperDropDownTitle = styled.div`
  position: absolute;
  background-color: #9ebaba;
  height: 18px;
  top: 1px;
  left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropDown = styled.div`
  width: 75%;
  height: 20px;
  background-color: #ffffff;
  /* margin-top: 25px; */
  z-index: 2;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 25%;
  cursor: pointer;

  transition: transform 300ms ease;
  transform: ${({ isDropDown }) =>
    isDropDown ? "rotate(180deg)" : "rotate(0deg)"};
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
  justify-content: center;
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

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
