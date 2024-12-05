import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const IconDelete = styled.img`
  width: auto;
  height: 12px;
  margin-right: 3px;
`;

export const IconAdd = styled.img`
  width: 10px;
  height: 10px;
  z-index: 1;
`;

export const WrapperAddButton = styled.div`
  width: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 3px 0 3px;
  height: 18px;
  cursor: pointer;
  z-index: 1;
`;

export const WrapperTableView = styled.div`
  width: 18px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 3px 0 3px;
  height: 18px;
  z-index: 1;
  cursor: pointer;
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
  width: 100%;
  position: relative;
  min-width: 200px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
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
  margin-left: 30px;
`;

export const WrapperCancelButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 3px 0 3px;
  height: 18px;
  cursor: pointer;
  margin-right: 30px;
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
  left: 100px;
  top: -6px;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;

export const HeaderContainer = styled.div`
  /* width: 100%; */
  /* margin: 0 auto; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  column-gap: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;

  ${({ tableType }) =>
    tableType &&
    css`
      margin-top: 29px;
    `}
`;

export const SearchWrapper = styled.div`
  width: 235px;
  margin-right: 25px;
`;

export const DropdownWrapper = styled.div`
  width: 260px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  /* width: 100%; */
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  margin: 10px 0 10px 0;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
