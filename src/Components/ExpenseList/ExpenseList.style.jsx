import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  @media (max-width: 700px) {
    overflow-x: hidden;
  }
`;

export const FlexStartWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
`;
