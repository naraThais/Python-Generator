"use client"
import Image from "next/image"
import { Container } from "./styles"

export function DashboardPreview() {
  return (
    <Container>
      <Image
        src="/dashboard.png"
        alt="Dashboard preview"
        width={1100}
        height={650}
        priority
      />
    </Container>
  )
}
