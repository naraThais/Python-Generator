"use client"
import Image from "next/image"
import { Container, BrandsGrid, BrandItem, Description } from "./styles"

export function TrustedBrands() {
  const brands = [
    { name: 'Amazon', width: 80, height: 24 },
    { name: 'Facebook', width: 100, height: 20 },
    { name: 'Google', width: 90, height: 30 },
    { name: 'Netflix', width: 90, height: 24 },
    { name: 'Spotify', width: 90, height: 27 },
  ]

  return (
    <Container>
      <Description>
        Come aboard and connect with maintainers and contributors building the next
        generation of generative AI SaaS products. Gain early access to innovative
        projects, exchange ideas with industry experts, and help shape solutions that
        are transforming the future of technology.
      </Description>

      <BrandsGrid>
        {brands.map((brand) => (
          <BrandItem key={brand.name}>
            <Image
              src={`/${brand.name.toLowerCase()}.png`}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </BrandItem>
        ))}
      </BrandsGrid>
    </Container>
  )
}