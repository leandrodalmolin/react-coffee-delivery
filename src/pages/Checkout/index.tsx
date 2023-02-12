import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Card } from '../../components/Card'
import { CardHeading } from '../../components/Card/CardHeading'
import { DeliveryAddressForm } from '../../components/DeliveryAddressForm'
import { Wrapper } from '../../layouts/DefaultLayout/styles'
import { HeadingMD } from '../../styles/typography'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const theme = useTheme()

  return (
    <Wrapper>
      <CheckoutContainer>
        <section>
          <HeadingMD>Complete your order</HeadingMD>
          <Card>
            <CardHeading
              heading="Delivery Address"
              subheading="Enter the address where you want to receive your order"
            >
              <MapPinLine size={22} color={theme['yellow-700']} />
            </CardHeading>
            <DeliveryAddressForm />
          </Card>
          <Card>
            <CardHeading
              heading="Payment"
              subheading="Payment is made on delivery. Choose the way you want to pay"
            >
              <CurrencyDollar size={22} color={theme['purple-700']} />
            </CardHeading>
          </Card>
        </section>
        <section>
          <HeadingMD>Selected coffees</HeadingMD>
          <Card borderRadius="uneven">
            <p>List of products</p>
          </Card>
        </section>
      </CheckoutContainer>
    </Wrapper>
  )
}
