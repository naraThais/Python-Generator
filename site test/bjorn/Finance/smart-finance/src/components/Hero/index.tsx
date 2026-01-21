import {
  Container,
  Title,
  Subtitle,
  Button,
  DashboardPreviewSection,
  Content,
  FooterSubtitle,
  Badge,
} from "./styles";
import { DashboardPreview } from "../DashboardPreview";
import Image from "next/image";

export function Hero() {
  return (
    <Container>
      <Content>
        <Badge>
          <Image src="/icon2.png" alt="Benefit" width={16} height={16} />
          Benefit
        </Badge>
        <Title>Your Smart Finance Companion</Title>

        <Subtitle>
          AiFin is your trusted partner in navigating the complexities of the
          financial world with ease and confidence. Powered by advanced
          artificial intelligence, AiFin provides innovative, tailored solutions
          to meet your specific financial goals and needs.
        </Subtitle>

        <Button>Get Started</Button>
      </Content>

      <DashboardPreviewSection>
        <DashboardPreview />
      </DashboardPreviewSection>
    </Container>
  )
}