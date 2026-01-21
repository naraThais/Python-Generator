import Image from "next/image"
import { Container, Header, Badge, Title, Description, CardsGrid, Card, CardContent, CardTitle, CardDescription } from "./styles"

export function Features() {
  return (
    <Container>
      <Header>
        <Badge>
          <Image src="/icon.png" alt="Benefit" width={16} height={16} />
          Benefit
        </Badge>
        <Title>Automate your finance</Title>
        <Description>
          Automating your finances can streamline your money management process, saving you time and ensuring that your financial obligations are met promptly.
        </Description>
      </Header>

      <CardsGrid>
        <Card variant="educational">
          <CardContent>
            <div className="tags">
              <span className="tag tag-articles">Articles</span>
              <span className="tag tag-documentation">Documentation</span>
              <span className="tag tag-case-studies">Case Studies</span>
              <span className="tag tag-podcasts">Podcasts</span>
              <span className="tag tag-tutorials">Tutorials</span>
              <span className="tag tag-workshops">Workshops</span>
            </div>
          </CardContent>
          <CardTitle>Educational Resources</CardTitle>
          <CardDescription>
            Access a wealth of educational materials, including articles, videos, and tutorials, curated by financial experts. Whether youre new to finance or a seasoned investor.
          </CardDescription>
        </Card>


        <Card variant="risk">
          <CardContent className="text-content">
            <CardTitle className="inside">Proactive Risk</CardTitle>
            <CardDescription className="inside">
              Protect your financial future with AiFins proactive risk management tools. Our AI algorithms monitor market trends, detect potential risks, and alert you to potential threats to your portfolios performance.
            </CardDescription>
          </CardContent>
        </Card>

        <Card variant="budget">
          <CardContent className="text-content">
            <CardTitle className="inside">Budgeting and Expense</CardTitle>
            <CardDescription className="inside">
              Take control of your finances with AiFins intuitive budgeting and expense tracking tools. Monitor your spending, set savings goals, and track your progress in real-time, all in one place.
            </CardDescription>
          </CardContent>
        </Card>
      </CardsGrid>
    </Container>
  )
}