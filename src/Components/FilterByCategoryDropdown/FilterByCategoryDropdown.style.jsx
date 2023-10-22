import styled from 'styled-components';

export const Text = styled.h1`
  font-size: 10px;
  margin-right: 2px;
`;

export const WrapperDropDown = styled.div`
  cursor: pointer;
  width: 100%;
  min-width: 200px;
  position: relative;
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
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  z-index: 2;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 5px;
  cursor: pointer;

  transition: transform 300ms ease;
  transform: ${({ isDropDown }) =>
    isDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropDownExpenseTitle = styled.h1`
  font-size: 13px;
  position: absolute;
  left: 100px;
  top: -6px;
`;
