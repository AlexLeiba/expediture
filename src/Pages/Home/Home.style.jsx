import styled, { css } from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  width: 100%;

  ${({ tableView }) => {
    if (tableView) {
      return css`
        overflow: auto;
      `;
    }
  }}
`;
