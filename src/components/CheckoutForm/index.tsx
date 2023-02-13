import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { HeadingMD } from '../../styles/typography'
import { Card } from '../Card'
import { CardHeading } from '../Card/CardHeading'
import { DeliveryAddress } from './DeliveryAddress'
import { OrderTotals } from './OrderTotals'
import { PaymentOptions } from './PaymentOptions'
import { SelectedProducts } from './SelectedProducts'
import { CheckoutFormContainer, SubmitButton } from './styles'

export function CheckoutForm() {
  const theme = useTheme()

  return (
    <CheckoutFormContainer>
      <section>
        <HeadingMD>Complete your order</HeadingMD>
        <Card>
          <CardHeading
            heading="Delivery Address"
            subheading="Enter the address where you want to receive your order"
          >
            <MapPinLine size={22} color={theme['yellow-700']} />
          </CardHeading>
          <DeliveryAddress />
        </Card>
        <Card>
          <CardHeading
            heading="Payment"
            subheading="Payment is made on delivery. Choose the way you want to pay"
          >
            <CurrencyDollar size={22} color={theme['purple-700']} />
          </CardHeading>
          <PaymentOptions />
        </Card>
      </section>
      <section>
        <HeadingMD>Selected coffees</HeadingMD>
        <Card borderRadius="uneven">
          <SelectedProducts />
          <OrderTotals />
          <SubmitButton type="button">Confirm order</SubmitButton>
        </Card>
      </section>
    </CheckoutFormContainer>
  )
}
