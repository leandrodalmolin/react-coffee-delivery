import { Bank, CreditCard, Money } from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import { CheckoutFormInputs, PaymentOptionsType } from '..'
import { ErrorMessage } from '../styles'
import { ToggleItem, ToggleRoot } from './styles'

// Being used on the Success page too
/* eslint-disable no-unused-vars */
export const paymentLabels = {
  debit: 'Debit Card',
  credit: 'Credit Card',
  cash: 'Cash',
} as { [key in PaymentOptionsType]: string }
/* eslint-enable no-unused-vars */

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
  ]

  return (
    <Controller
      name="payment"
      control={control}
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
