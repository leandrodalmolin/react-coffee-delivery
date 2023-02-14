import { priceFormatter } from '../../../../../../utils/formatter'
import { PriceTagContainer } from './styles'

interface PriceTagProps {
  price: number
}

export function PriceTag({ price }: PriceTagProps) {
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
