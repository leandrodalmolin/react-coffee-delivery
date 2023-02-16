import Icon, { Bank, CreditCard, Money } from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import { CheckoutFormInputs } from '..'
import { ErrorMessage } from '../styles'
import { ToggleItem, ToggleRoot } from './styles'

type PaymentLabelsType = {
  debit: string
  credit: string
  cash: string
}

export type PaymentOptionsType = keyof PaymentLabelsType

// Being used on the Success page too
export const paymentLabels = {
  debit: 'Debit Card',
  credit: 'Credit Card',
  cash: 'Cash',
} as PaymentLabelsType

type PaymentOptionType = {
  iconComponent: Icon.Icon
  label: string
  value: PaymentOptionsType
}

export function PaymentOptions() {
  const { control } = useFormContext<CheckoutFormInputs>()

  // For the sake of keeping the parent lean, all payment options are kept in here.
  // There is no need having them in the parent since we are using the form context.
  const options = [
    {
      label: paymentLabels.credit,
      value: 'credit',
      iconComponent: CreditCard,
    },
    {
      label: paymentLabels.debit,
      value: 'debit',
      iconComponent: Bank,
    },
    {
      label: paymentLabels.cash,
      value: 'cash',
      iconComponent: Money,
    },
  ] as PaymentOptionType[]

  return (
    <Controller
      name="payment"
      control={control}
      rules={{ required: 'Please select a payment method' }}
      render={({ field: { onChange }, formState: { errors } }) => (
        <>
          <ToggleRoot
            type="single"
            aria-label="Payment Options"
            onValueChange={onChange}
          >
            {options.map((option) => (
              <ToggleItem
                key={option.value}
                value={option.value}
                aria-invalid={errors.payment ? 'true' : 'false'}
              >
                <option.iconComponent size={16} />
                {option.label}
              </ToggleItem>
            ))}
          </ToggleRoot>
          {errors.payment && (
            <ErrorMessage role="alert">{errors.payment.message}</ErrorMessage>
          )}
        </>
      )}
    />
  )
}
