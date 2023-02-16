import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { HeadingMD, HeadingSm } from '../../../../styles/typography'
import { Card } from '../../../../components/Card'
import { CardHeading } from '../../../../components/Card/CardHeading'
import { DeliveryAddress } from './DeliveryAddress'
import { OrderTotals } from './OrderTotals'
import { PaymentOptions } from './PaymentOptions'
import { OrderItems } from './OrderItems'
import { CheckoutFormContainer, SubmitButton } from './styles'
import { BasketContext } from '../../../../contexts/BasketContext'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

export type PaymentOptionsType = 'debit' | 'credit' | 'cash'

export interface CheckoutFormInputs {
  street: string
  city: string
  county: string
  postcode: string
  payment: PaymentOptionsType
}

export function CheckoutForm() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { items: basketItems } = useContext(BasketContext)

  const formMethods = useForm<CheckoutFormInputs>({
    defaultValues: {
      street: '',
      city: '',
      county: '',
      postcode: '',
    },
  })
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods

  const onFormSubmit: SubmitHandler<CheckoutFormInputs> = () => {
    navigate('/success')
  }

  return (
    <FormProvider {...formMethods}>
      <CheckoutFormContainer onSubmit={handleSubmit(onFormSubmit)}>
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
            <PaymentOptions
              options={[
                {
                  label: 'Credit Card',
                  value: 'credit',
                  iconComponent: CreditCard,
                },
                { label: 'Debit Card', value: 'debit', iconComponent: Bank },
                { label: 'Cash', value: 'cash', iconComponent: Money },
              ]}
            />
          </Card>
        </section>
        <section>
          <HeadingMD>Selected coffees</HeadingMD>
          <Card borderRadius="uneven">
            {basketItems.length === 0 && (
              <>
                <HeadingSm>Oops, your basket is empty! </HeadingSm>
                <p>
                  Please, <Link to="/">go back to the shop</Link> and select a
                  few items.
                </p>
              </>
            )}
            {basketItems.length > 0 && (
              <>
                <OrderItems />
                <OrderTotals />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Confirm order
                </SubmitButton>
              </>
            )}
          </Card>
        </section>
      </CheckoutFormContainer>
    </FormProvider>
  )
}
