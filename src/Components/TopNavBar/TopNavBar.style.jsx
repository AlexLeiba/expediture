import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 30px;
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
`;

export const Text = styled.h1`
  font-size: 10px;
  margin-right: 2px;
`;

export const TextButton = styled.h1`
  font-size: 10px;
  fontweight: 400;
`;

export const InputWrapper = styled.div`
  width: 40%;
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
  // border: 1px solid #ffffff;
  // border-radius: 4px;
  padding: 0 3px 0 0;
  height: 18px;
  cursor: pointer;
`;

export const WrapperCancelButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // border: 1px solid #ffffff;
  // border-radius: 4px;
  padding: 0 3px 0 3px;
  height: 18px;
  cursor: pointer;
`;
