import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const Container = styled.section`
  position: relative;
  text-align: center;
  padding: 0 24px 200px;
  background-color: #050505;

  background-image: url("/montain2.jpg");
  background-size: cover;
  background-position: bottom;

  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      #000000 0%,
      rgba(0, 0, 0, 0.9) 10%,
      rgba(0, 0, 0, 0.45) 25%,
      rgba(0, 0, 0, 0.45) 35%,
      rgba(0, 0, 0, 0.9) 85%,
      #000000 100%
    );
    z-index: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 140px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 96px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 44px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  max-width: 620px;
  margin: 24px auto 0;
  color: #a0a0a0;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  margin-top: 56px;
  padding: 14px 32px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #ff6a00 0%, #ff8c1a 100%);

  color: #fff;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    box-shadow: 0 0 26px rgba(255, 122, 26, 0.9);
  }

  &:hover::before {
    opacity: 1;
    animation: neon-border 1.2s linear infinite;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: 280px;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  font-size: 14px;
  margin-bottom: 24px;

  span {
    font-size: 16px;
  }
`;

export const DashboardPreviewSection = styled.section`
  position: relative;
  z-index: 1;
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 64px;
  }
`;

export const FooterSubtitle = styled.p`
  margin-top: 48px;
  max-width: 720px;
  color: #a0a0a0;
  font-size: 14px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }
`;
