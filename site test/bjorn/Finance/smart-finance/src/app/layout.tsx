import { ReactNode } from "react"
import StyledComponentsRegistry from "./registry"
import GlobalStyles from "../styles/GlobalStyles"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
