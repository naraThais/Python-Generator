import styled from "styled-components";

export const Container = styled.section`
  padding: 0 64px;
  background-color: #000000;
  color: #ffffff;
  position: relative;
  top: -150px;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
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

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #a0a0a0;
  line-height: 1.6;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;

  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  variant: "educational" | "track" | "risk" | "budget";
}

export const Card = styled.div<CardProps>`
  position: relative;
  border-radius: 28px;
  padding: 32px;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  flex-direction: column;
  gap: 20px;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 968px) {
    grid-row: auto;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &.text-content {
    justify-content: center;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  .tag {
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .tag-articles {
    background: linear-gradient(135deg, #ff6b9d 0%, #c9184a 100%);
  }

  .tag-documentation {
    background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
  }

  .tag-case-studies {
    background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  }

  .tag-podcasts {
    background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  }

  .tag-tutorials {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  }

  .tag-workshops {
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  }

  .chart-header {
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .chart {
    width: 100%;
    height: auto;
  }
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;
