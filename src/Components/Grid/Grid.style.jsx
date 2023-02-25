import styled, { css } from "styled-components";

/*
BEAKPOINTS
mobile - < 768
tablet - 768 >= 1179
small desktop - <= 1920
large desktop - >= 1921
*/

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 125rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  background-color: ${({ backGroundColor }) =>
    backGroundColor ? backGroundColor : "transparent"};
  ${({ fluid }) =>
    `
        ${fluid ? `max-width: 100%` : `max-width: 125rem`};
        @media (max-width: 1200px) {
          ${fluid ? `max-width: 100%` : `max-width: 64rem`};
        }
        @media (max-width: 767px) {
          ${fluid ? `max-width: 100%` : `max-width: 33.5rem`};
        }
        @media (min-width: 1200) {
          max-width: 100%;
        }
    `}
  background-image: url(${({ img }) => (img ? img : "")});
  ${({ hasImg }) =>
    hasImg &&
    `
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    `}

  @media (max-width: 1200px) {
    background-image: url(${({ taImg }) => (taImg ? taImg : "")});
  }
  @media (max-width: 767px) {
    background-image: url(${({ smImg }) => (smImg ? smImg : "")});
  }
`;

export const Row = styled.div`
  width: 100%;
  margin-left: -1.2rem;
  margin-right: -1.2rem;
  display: flex;
  justify-content: ${({ flexEnd }) => (flexEnd ? "flex-end" : "flex-start")};
  align-content: stretch;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: row !important;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    flex-direction: row;
    padding: 0 16px 0 16px;
  }
`;

// interface ColProps {
//   lg: {
//     size: number;
//     offset?: number;
//   };
//   md: {
//     size: number;
//     offset?: number;
//   };
//   sm: {
//     size: number;
//     offset?: number;
//   };
//   half?: number;
// }

export const Col = styled.div`
  width: 100%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ lg }) =>
    lg &&
    css`
      position: relative;
      @media (min-width: 1201px) {
        width: ${lg.size * 10}rem;
        ${lg.offset
          ? `margin-left: ${lg.offset * 10.25}rem`
          : "margin-left: 0"};
      }
    `}
  ${({ md }) =>
    md &&
    css`
      position: relative;
      @media (max-width: 1200px) {
        width: ${md.size * 10}rem;
        ${md.offset ? `margin-left: ${md.offset * 10}rem` : "margin-left: 0"};
      }
    `}
  ${({ sm }) =>
    sm &&
    css`
      position: relative;
      @media (max-width: 767px) {
        width: 100%;
        margin-left: 0;
      } ;
    `}
    ${({ half }) => half && `width: 50%`};
`;

export const DisplayFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  align-content: space-between;
  & > * {
    flex: 1;
    &:first-child {
      margin-right: 30px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    & > * {
      flex: 1;
      &:first-child {
        margin-right: 0px;
        margin-bottom: 2.4rem;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const DisplayFlexBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-between;
`;

export const Img = styled.img`
  display: block;
  position: contain;
  align-items: center;
  padding-top: 1.8rem;
  margin: auto;
  max-width: 100%;
  @media (max-width: 1200px) {
    margin: auto;
  }
`;

export const ImgIpadSvg = styled.svg`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    width: 100%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImgIpad = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    width: 100%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImgIphone = styled.img`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;

export const ImgForgotPasswordHD = styled.img`
  display: block;
  width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ImgForgotPasswordIpad = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    width: 100%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ImgForgotPasswordIphone = styled.img`
  display: none;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;
