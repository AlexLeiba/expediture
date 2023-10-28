import styled from 'styled-components';
export const WrapperDropDown = styled.div`
  cursor: pointer;
  width: 100%;
  min-width: 510px;
  max-width: 700px;
  position: relative;
`;

export const WrapperDropDownTitle = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  background-color: #9ebaba;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const DropDown = styled.div`
  width: 50%;
  height: 23px;
  background-color: #ffffff;
  z-index: 2;
  border-radius: 5px;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 1px;
  right: 51%;
  cursor: pointer;

  transition: transform 300ms ease;
  transform: ${({ isDropDown }) =>
    isDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropDownExpenseTitle = styled.h1`
  font-size: 13px;
  position: absolute;
  left: 70px;
  top: -5px;
`;

export const InputWrapper = styled.div`
  width: 200px;
`;

export const Text = styled.h1`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 2px 4px 2px 4px;
`;
