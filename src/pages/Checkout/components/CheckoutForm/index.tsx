import { Coffee, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { HeadingMD } from '../../../../styles/typography'
import { Card } from '../../../../components/Card'
import { CardHeading } from '../../../../components/Card/CardHeading'
import { DeliveryAddress } from './DeliveryAddress'
import { OrderTotals } from './OrderTotals'
import { PaymentOptions } from './PaymentOptions'
import { OrderItems } from './OrderItems'
import {
  CheckoutFormContainer,
  EmptyBasketNotice,
  SubmitButton,
} from './styles'
import { BasketContext } from '../../../../contexts/BasketContext'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const paymentEnum = z.enum(['debit', 'credit', 'cash'], {
  required_error: 'Please select a payment method',
})

const checkoutFormSchema = z.object({
  street: z.string().min(1, { message: 'Please enter a street name' }),
  city: z.string().min(1, { message: 'Please enter a city name' }),
  county: z.string(),
  postcode: z.string().min(1, { message: 'Please enter a postcode' }),
  payment: paymentEnum,
})

export type PaymentOptionsType = z.infer<typeof paymentEnum>
export type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>

export function CheckoutForm() {
  const theme = useTheme()
  const navigate = useNavigate()
  const { items: basketItems, clearBasket } = useContext(BasketContext)

  const formMethods = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
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

  /**
   * This code is only executed if form is valid
   */
  const onFormSubmit: SubmitHandler<CheckoutFormInputs> = (formData) => {
    // At the moment, products aren't needed at the success page.
    // This is only an example how it could be forwarded.
    const formDataWithBasketItems = {
      ...formData,
      products: { ...basketItems },
    }

    clearBasket()

    navigate('/success', {
      state: formDataWithBasketItems,
    })
  }

  return (
    <>
      {basketItems.length === 0 && (
        <Card alignCenter>
          <EmptyBasketNotice>
            <Coffee size={50} />
            <HeadingMD>Oops, your basket is empty!</HeadingMD>
            <p>
              Please, <Link to="/">go back to the shop</Link> and select a few
              items.
            </p>
          </EmptyBasketNotice>
        </Card>
      )}
      {basketItems.length > 0 && (
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
                <PaymentOptions />
              </Card>
            </section>
            <section>
              <HeadingMD>Selected coffees</HeadingMD>
              <Card borderRadius="uneven">
                <OrderItems />
                <OrderTotals />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Confirm order
                </SubmitButton>
              </Card>
            </section>
          </CheckoutFormContainer>
        </FormProvider>
      )}
    </>
  )
}
