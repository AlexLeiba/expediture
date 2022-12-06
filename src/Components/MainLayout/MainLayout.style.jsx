import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 512px) {
    width: 100%;
  }
`;
