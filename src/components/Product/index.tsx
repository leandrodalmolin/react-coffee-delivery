import { TagsList } from './TagsList'
import { PriceTag } from './PriceTag'
import { ProductContainer } from './styles'
import { IProduct } from '../../data'
import { BasketForm } from './BasketForm'
import { Heading } from '../Heading'

export function Product(product: IProduct) {
  const { title, description, image, tags, price } = product

  return (
    <ProductContainer>
      <div>
        <img src={image} alt={title} />
        <TagsList tags={tags} />
        <Heading variant="h4">{title}</Heading>
        <p>{description}</p>
      </div>
      <footer>
        <PriceTag price={price} />
        <BasketForm product={product} />
      </footer>
    </ProductContainer>
  )
}
