import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
};

export const Container = styled.header`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 48px);
  max-width: 1200px;

  padding: 16px 32px;
  border-radius: 999px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(10, 10, 10, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border: 1px solid rgba(255, 255, 255, 0.06);

  z-index: 10;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 14px 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }

  a {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    cursor: pointer;
    transition: color 0.25s ease;

    &:hover {
      color: #ffffff;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -6px;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, #a31332, #ff6a00);
      border-radius: 2px;
      transform: translateX(-50%);
      transition: width 0.3s ease;
      box-shadow: 0 0 10px rgba(255, 106, 0, 0.7);
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
