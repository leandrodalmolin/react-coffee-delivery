import { Wrapper } from '../../components/Wrapper'
import { Hero } from '../../components/Hero'
import { ProductsList } from '../../components/ProductsList'

export function Home() {
  return (
    <>
      <Hero />
      <Wrapper>
        <ProductsList />
      </Wrapper>
    </>
  )
}
