import { ProductsListContainer } from './styles'
import { Card } from '../../../../components/Card'
import { productsData } from '../../../../data'
import { Product } from './Product'
import { Heading } from '../../../../components/Heading'

export function ProductsList() {
  return (
    <>
      <Heading variant="h3">Our Coffees</Heading>
      <ProductsListContainer>
        {productsData.map(({ id, title, description, image, price, tags }) => (
          <Card key={id} borderRadius="uneven" padding="narrow" alignCenter>
            <Product
              id={id}
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
