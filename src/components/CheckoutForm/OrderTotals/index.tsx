import { priceFormatter } from '../../../utils/formatter'
import { OrderTotalsTable } from './styles'

export function OrderTotals() {
  return (
    <OrderTotalsTable>
      <tbody>
        <tr>
          <th>Products</th>
          <td>{priceFormatter.format(27.9)}</td>
        </tr>
        <tr>
          <th>Delivery</th>
          <td>{priceFormatter.format(9.9)}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>{priceFormatter.format(50)}</td>
        </tr>
      </tbody>
    </OrderTotalsTable>
  )
}
