import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { productsData } from '../../../../../data'
import { priceFormatter } from '../../../../../utils/formatter'
import { QuantityInput } from '../../../../../components/QuantityInput'
import {
  Divider,
  ItemCentralContainer,
  ItemLeftContainer,
  ItemRightContainer,
  SelectedProductsItem,
  SelectedProductsList,
} from './styles'

export function SelectedProducts() {
  const theme = useTheme()
  const selectedProducts = [productsData[0], productsData[1]]

  return (
    <SelectedProductsList>
      {selectedProducts.map((product) => {
        const price = priceFormatter.format(product.price)

        return (
          <div key={product.id}>
            <SelectedProductsItem>
              <ItemLeftContainer>
                <img src={product.image} alt={product.title} />
              </ItemLeftContainer>
              <ItemCentralContainer>
                <p>{product.title}</p>
                <QuantityInput />
                <button type="button">
                  <Trash size={16} color={theme['purple-500']} />
                  Remove
                </button>
              </ItemCentralContainer>
              <ItemRightContainer>{price}</ItemRightContainer>
            </SelectedProductsItem>
            <Divider />
          </div>
        )
      })}
    </SelectedProductsList>
  )
}
