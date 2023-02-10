import { HeadingLG, HeadingMD } from '../../styles/typography'
import { ProductsListContainer } from './styles'
import { Card } from '../Card'
import { CardFooter } from '../Card/CardFooter'
import { PriceTag } from '../PriceTag'
import { AddToBasketForm } from '../AddToBasketForm'
import { TagsList } from '../TagsList'
import { CardBody } from '../Card/CardBody'
import { productsData } from '../../data'

export function ProductsList() {
  return (
    <>
      <HeadingLG>Our Coffees</HeadingLG>
      <ProductsListContainer>
        {productsData.map(({ id, title, description, image, price, tags }) => (
          <Card key={id} variant="uneven">
            <CardBody>
              <img src={image} alt={title} />
              <TagsList tags={tags} />
              <HeadingMD>{title}</HeadingMD>
              <p>{description}</p>
            </CardBody>
            <CardFooter>
              <PriceTag price={price} />
              <AddToBasketForm />
            </CardFooter>
          </Card>
        ))}
      </ProductsListContainer>
    </>
  )
}
