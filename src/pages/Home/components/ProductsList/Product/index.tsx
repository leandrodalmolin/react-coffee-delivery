import { TagsList } from './TagsList'
import { HeadingMD } from '../../../../../styles/typography'
import { PriceTag } from './PriceTag'
import { ProductContainer } from './styles'
import { IProduct } from '../../../../../data'
import { BasketForm } from './BasketForm'

export function Product(product: IProduct) {
  const { title, description, image, tags, price } = product

  return (
    <ProductContainer>
      <div>
        <img src={image} alt={title} />
        <TagsList tags={tags} />
        <HeadingMD>{title}</HeadingMD>
        <p>{description}</p>
      </div>
      <footer>
        <PriceTag price={price} />
        <BasketForm product={product} />
      </footer>
    </ProductContainer>
  )
}
