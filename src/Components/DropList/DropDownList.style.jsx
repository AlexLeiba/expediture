import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
`;

export const WrapperCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const WrapperIconLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CategoryCard = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Text = styled.h1`
  font-size: 13px;
  margin-left: 5px;
`;

export const CategoryIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ColorLine = styled.div`
  height: 30px;
  width: 3px;
  background-color: ${({ colorLine }) => (colorLine ? colorLine : "")};
`;
