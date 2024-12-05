import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  box-shadow: 5px 10px 10px #5eb5b3;
  background-color: #3e807e;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  margin: 0 5px;
`;

export const Text = styled.h1`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 2px 4px 2px 4px;
`;

export const WrapperText = styled.div`
  position: absolute;
  top: 0;
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
/////
export const WrapperDropDown = styled.div`
  cursor: pointer;
  width: 50%;
  min-width: 350px;
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
  border-radius: 3px;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 50%;
  cursor: pointer;

  transition: transform 300ms ease;
  transform: ${({ isDropDown }) =>
    isDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const SubmitButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px 5px 0;
  &:hover {
    opacity: 0.5;
  }
`;

export const IconPlane = styled.img`
  width: 15px;
  height: 15px;
`;

export const DropDownExpenseTitle = styled.h1`
  font-size: 13px;
  position: absolute;
  left: 70px;
  top: -6px;
`;

export const InputWrapper = styled.div`
  width: 200px;
`;
