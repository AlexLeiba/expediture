import styled from "styled-components";

export const Container = styled.header`
  width: 60%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 512px) {
    width: 100%;
  }
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

  @media (max-width: 512px) {
    margin-left: 10px;
  }
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
  width: auto;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;

  @media (max-width: 1024px) {
    width: auto;
    height: 18px;
  }

  @media (max-width: 512px) {
    margin-right: 10px;
  }
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
