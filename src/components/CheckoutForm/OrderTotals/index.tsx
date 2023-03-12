import { useContext } from 'react'
import { BasketContext, DELIVERY_COST } from '../../../contexts/BasketContext'
import { priceFormatter } from '../../../utils/formatter'
import { OrderTotalsTable } from './styles'

export function OrderTotals() {
  const { totals } = useContext(BasketContext)

  return (
    <OrderTotalsTable>
      <tbody>
        <tr>
          <th>Products</th>
          <td>{priceFormatter.format(totals.itemsAmount)}</td>
        </tr>
        <tr>
          <th>Delivery</th>
          <td>{priceFormatter.format(DELIVERY_COST)}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{priceFormatter.format(totals.orderAmount)}</td>
        </tr>
      </tbody>
    </OrderTotalsTable>
  )
}
