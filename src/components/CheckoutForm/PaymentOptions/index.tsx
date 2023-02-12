import { Bank, CreditCard, Money } from 'phosphor-react'
import { ToggleItem, ToggleRoot } from './styles'

export function PaymentOptions() {
  return (
    <ToggleRoot type="single" aria-label="Payment Options">
      <ToggleItem value="credit">
        <CreditCard size={16} />
        Credit Card
      </ToggleItem>
      <ToggleItem value="debit">
        <Bank size={16} />
        Debit Card
      </ToggleItem>
      <ToggleItem value="cash">
        <Money size={16} />
        Cash
      </ToggleItem>
    </ToggleRoot>
  )
}
