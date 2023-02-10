import { Card } from '../components/Card'
import { Wrapper } from '../layouts/DefaultLayout/styles'
import { HeadingMD } from '../styles/typography'

export function Checkout() {
  return (
    <Wrapper>
      <Card>
        <HeadingMD>Complete your order</HeadingMD>
      </Card>
    </Wrapper>
  )
}
