import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  margin: auto;
  background-color: #4a7373;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogoCard = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 30px;
`;

export const LogoCard = styled.div`
  width: 15px;
  height: 15px;
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    width: 13px;
    height: 13px;
    margin-bottom: 8px;
  }
`;
export const LogoGit = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: 20px;
    height: 18px;
  }

  margin-right: 30px;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const Text = styled.h1`
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
