import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: none;
  font-size: 12px;
  outline: none;

  ${({ inputType }) => {
    switch (inputType) {
      case 'search':
        return css`
          padding: 5.5px 5px 5.5px 20px;
        `;

      default:
        return css`
          padding: 6px 5px 5px 50px;
        `;
    }
  }}
`;

export const InputWrapper = styled.div`
  width: 350px;
  position: relative;
`;

export const InputWrapperCost = styled.div`
  width: 320px;
  position: relative;
`;

export const WrapperLabel = styled.div`
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  background-color: #9ebaba;
  border-radius: 4px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ inputType }) => (inputType === 'title' ? '0 6px' : 0)};
`;

export const Text = styled.h1`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  padding: 2px 4px 2px 4px;
`;

export const IconMoney = styled.img`
  width: 7px;
  height: 7px;
  margin-right: 5px;
`;

export const IconSearch = styled.img`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 6px;
  left: 5px;
`;

export const WrapperClearButton = styled.div`
  position: absolute;
  top: 2.5px;
  right: -10px;
  border-radius: 4px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
`;
