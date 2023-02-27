import { Card } from '../../components/Card'
import { SuccessContainer, SuccessMessage, SummaryList } from './styles'
import DeliverySvg from '../../assets/delivery-illustration.svg'
import { RoundedIcon } from '../../components/RoundedIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, Navigate } from 'react-router-dom'
import { CheckoutFormInputs } from '../Checkout/components/CheckoutForm'
import { paymentLabels } from '../Checkout/components/CheckoutForm/PaymentOptions'
import { Wrapper } from '../../components/Wrapper'

interface ISuccessPageState {
  state: CheckoutFormInputs
}

export function Success() {
  const theme = useTheme()
  const { state } = useLocation() as ISuccessPageState

  // Only allow access when traffic is coming from Checkout page
  if (!state) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <Wrapper>
      <SuccessMessage>
        <h2>Woohoo, order confirmed!</h2>
        <p>Thank you for your purchase, your order is on the way.</p>
      </SuccessMessage>
      <SuccessContainer>
        <main>
          <Card variant="coloured-border" borderRadius="uneven">
            <SummaryList>
              <li>
                <RoundedIcon backgroundColor={theme['purple-500']}>
                  <MapPin weight="fill" />
                </RoundedIcon>
                <p>
                  Delivery at <strong>{state.street}</strong>
                  <br />
                  {state.city}
                </p>
              </li>
              <li>
                <RoundedIcon backgroundColor={theme['yellow-500']}>
                  <Timer weight="fill" />
                </RoundedIcon>
                <p>
                  Estimated delivery date
                  <br />
                  <strong>20min - 30min</strong>
                </p>
              </li>
              <li>
                <RoundedIcon backgroundColor={theme['yellow-700']}>
                  <CurrencyDollar />
                </RoundedIcon>
                <p>
                  Payment method
                  <br />
                  <strong>{paymentLabels[state.payment]}</strong>
                </p>
              </li>
            </SummaryList>
          </Card>
        </main>
        <aside>
          <img src={DeliverySvg} alt="Delivery Illustration" />
        </aside>
      </SuccessContainer>
    </Wrapper>
  )
}
