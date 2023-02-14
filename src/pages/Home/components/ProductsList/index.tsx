import { HeadingLG } from '../../../../styles/typography'
import { ProductsListContainer } from './styles'
import { Card } from '../../../../components/Card'
import { productsData } from '../../../../data'
import { Product } from './Product'

export function ProductsList() {
  return (
    <>
      <HeadingLG>Our Coffees</HeadingLG>
      <ProductsListContainer>
        {productsData.map(({ id, title, description, image, price, tags }) => (
          <Card key={id} borderRadius="uneven" padding="narrow" alignCenter>
            <Product
              title={title}
              description={description}
              image={image}
              price={price}
              tags={tags}
            />
          </Card>
        ))}
      </ProductsListContainer>
    </>
  )
}
