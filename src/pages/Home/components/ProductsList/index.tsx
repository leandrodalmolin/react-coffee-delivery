import { HeadingLG, HeadingMD } from '../../../../styles/typography'
import { AddToBasketForm, ProductsListContainer } from './styles'
import { Card } from '../../../../components/Card'
import { CardFooter } from '../../../../components/Card/CardFooter'
import { PriceTag } from '../PriceTag'
import { TagsList } from '../TagsList'
import { CardBody } from '../../../../components/Card/CardBody'
import { productsData } from '../../../../data'
import { QuantityControl } from '../../../../components/QuantityControl'
import { ShoppingCartSimple } from 'phosphor-react'

export function ProductsList() {
  return (
    <>
      <HeadingLG>Our Coffees</HeadingLG>
      <ProductsListContainer>
        {productsData.map(({ id, title, description, image, price, tags }) => (
          <Card key={id} borderRadius="uneven" padding="narrow" alignCenter>
            <CardBody>
              <img src={image} alt={title} />
              <TagsList tags={tags} />
              <HeadingMD>{title}</HeadingMD>
              <p>{description}</p>
            </CardBody>
            <CardFooter>
              <PriceTag price={price} />
              <AddToBasketForm>
                <QuantityControl />
                <button type="button">
                  <ShoppingCartSimple size={22} weight="fill" />
                </button>
              </AddToBasketForm>
            </CardFooter>
          </Card>
        ))}
      </ProductsListContainer>
    </>
  )
}
