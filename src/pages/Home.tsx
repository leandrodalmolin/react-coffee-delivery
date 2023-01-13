import { Hero } from '../components/Hero'
import { Products } from '../components/Products'
import { Wrapper } from '../layouts/DefaultLayout/styles'

export function Home() {
  return (
    <>
      <Hero />
      <Wrapper>
        <Products />
      </Wrapper>
    </>
  )
}
