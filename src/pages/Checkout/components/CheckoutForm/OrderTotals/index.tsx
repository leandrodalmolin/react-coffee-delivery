import { useContext } from 'react'
import { BasketContext } from '../../../../../contexts/BasketContext'
import { priceFormatter } from '../../../../../utils/formatter'
import { OrderTotalsTable } from './styles'

export function OrderTotals() {
  const { totalAmount: productsTotal, deliveryCost } = useContext(BasketContext)
  const orderTotal = productsTotal + deliveryCost

  return (
    <OrderTotalsTable>
      <tbody>
        <tr>
          <th>Products</th>
          <td>{priceFormatter.format(productsTotal)}</td>
        </tr>
        <tr>
          <th>Delivery</th>
          <td>{priceFormatter.format(deliveryCost)}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{priceFormatter.format(orderTotal)}</td>
        </tr>
      </tbody>
    </OrderTotalsTable>
  )
}
