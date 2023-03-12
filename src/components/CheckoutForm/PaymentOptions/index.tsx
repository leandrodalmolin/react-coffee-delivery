import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentOptionsType } from '..'
import { RadioGroup } from '../../RadioGroup'
import { ErrorMessage } from '../styles'

// Being used on the Success page too
/* eslint-disable no-unused-vars */
export const paymentLabels = {
  debit: 'Debit Card',
  credit: 'Credit Card',
  cash: 'Cash',
} as { [key in PaymentOptionsType]: string }
/* eslint-enable no-unused-vars */

interface IPaymentOptionsProps {
  onChange: () => void
  errorMessage?: string | null
}

export function PaymentOptions({
  onChange,
  errorMessage = null,
}: IPaymentOptionsProps) {
  // For the sake of keeping the parent lean, all payment options are kept in here.
  // There is no need having them in the parent since we are using the form context.
  const options = [
    {
      label: paymentLabels.credit,
      value: 'credit',
      iconComponent: CreditCard,
      isInvalid: Boolean(errorMessage),
    },
    {
      label: paymentLabels.debit,
      value: 'debit',
      iconComponent: Bank,
      isInvalid: Boolean(errorMessage),
    },
    {
      label: paymentLabels.cash,
      value: 'cash',
      iconComponent: Money,
      isInvalid: Boolean(errorMessage),
    },
  ]

  return (
    <>
      <RadioGroup options={options} onChange={onChange} />
      {errorMessage && <ErrorMessage role="alert">{errorMessage}</ErrorMessage>}
    </>
  )
}
