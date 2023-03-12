import { priceFormatter } from '../../../utils/formatter'
import { PriceTagContainer } from './styles'

interface IPriceTagProps {
  price: number
}

export function PriceTag({ price }: IPriceTagProps) {
  const priceString = priceFormatter.format(price)
  const currencySymbol = priceString.charAt(0)
  const priceValue = priceString.slice(1)

  return (
    <PriceTagContainer>
      <span>{currencySymbol}</span>
      <strong>{priceValue}</strong>
    </PriceTagContainer>
  )
}
