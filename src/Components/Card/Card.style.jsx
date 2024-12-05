import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
  border: ${({ newExpenses }) => (newExpenses ? '1px solid green' : '')};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextCreatedAt = styled.h1`
  font-size: 10px;
  font-weight: 400;
  color: gray;
`;

export const TextTitle = styled.h1`
  font-size: 15px;
  font-weight: 600;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 4px;
  margin-right: 8px;
`;

export const WrapperRemoveAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 8px;
  margin-top: 8px;
`;

export const WrapperQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconRemove = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
  margin-bottom: 6px;
`;

export const IconMoney = styled.img`
  width: 7px;
  height: 7px;
  margin-right: 5px;
`;

export const TextQuantity = styled.h1`
  font-size: 10px;
  margin: 0;
`;

export const VerticalLine = styled.div`
  height: 74px;
  width: 5px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#000000'};
  position: absolute;
  right: 0;
  top: 0;
`;
