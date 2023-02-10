import { Hero } from '../components/Hero'
import { ProductsList } from '../components/ProductsList'
import { Wrapper } from '../layouts/DefaultLayout/styles'

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
