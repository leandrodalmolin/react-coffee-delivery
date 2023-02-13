import { Card } from '../../components/Card'
import { Wrapper } from '../../layouts/DefaultLayout/styles'
import { SuccessContainer, SuccessMessage, SummaryList } from './styles'
import DeliverySvg from '../../assets/delivery-illustration.svg'
import { RoundedIcon } from '../../components/RoundedIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <Wrapper>
      <SuccessMessage>
        <h2>Woohoo! Confirmed order</h2>
        <p>Now just wait for the coffee to come to you soon</p>
      </SuccessMessage>
      <SuccessContainer>
        <main>
          <Card variant="coloured-border" borderRadius="uneven">
            <SummaryList>
              <li>
                <RoundedIcon background={theme['purple-500']}>
                  <MapPin weight="fill" />
                </RoundedIcon>
                <p>
                  Delivery at <strong>Rua João Daniel Martinelli, 102</strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </p>
              </li>
              <li>
                <RoundedIcon background={theme['yellow-500']}>
                  <Timer weight="fill" />
                </RoundedIcon>
                <p>
                  Estimated delivery date
                  <br />
                  <strong>20min - 30min</strong>
                </p>
              </li>
              <li>
                <RoundedIcon background={theme['yellow-700']}>
                  <CurrencyDollar />
                </RoundedIcon>
                <p>
                  Payment method
                  <br />
                  <strong>Credit Card</strong>
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
