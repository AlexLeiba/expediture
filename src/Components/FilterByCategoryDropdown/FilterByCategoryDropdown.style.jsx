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
  height: 20px;
  top: 2.5px;
  left: 2.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0 4px;
`;

export const DropDown = styled.div`
  width: 100%;
  height: 25px;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 2;
`;

export const IconDropDown = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 2.5px;
  right: 5px;
  cursor: pointer;

  transition: transform 300ms ease;
  transform: ${({ isDropDown }) =>
    isDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropDownExpenseTitle = styled.h1`
  font-size: 13px;
  position: absolute;
  left: 120px;
  top: -4px;
`;
