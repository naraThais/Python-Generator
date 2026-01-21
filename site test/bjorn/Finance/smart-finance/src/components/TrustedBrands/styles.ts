import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const Container = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 120px 64px;
  background-color: #000;
  text-align: center;
  position: relative;
  top: -200px;
`;

export const Description = styled.p`
  max-width: 720px;
  margin: 0 auto 48px;
  color: #a0a0a0;
  font-size: 14px;
  line-height: 1.8;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    margin-bottom: 40px;
  }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const BrandItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
