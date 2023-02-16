import Icon from 'phosphor-react'
import { Controller, useFormContext } from 'react-hook-form'
import { CheckoutFormInputs, PaymentOptionsType } from '..'
import { ErrorMessage } from '../styles'
import { ToggleItem, ToggleRoot } from './styles'

interface PaymentOptionsProps {
  options: {
    iconComponent: Icon.Icon
    label: string
    value: PaymentOptionsType
  }[]
}

export function PaymentOptions({ options }: PaymentOptionsProps) {
  const { control } = useFormContext<CheckoutFormInputs>()

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
