import { ProductContainer, AddToBasketForm } from './styles'
import { TagType } from '../../../../../data'
import { TagsList } from './TagsList'
import { HeadingMD } from '../../../../../styles/typography'
import { PriceTag } from './PriceTag'
import { QuantityControl } from '../../../../../components/QuantityControl'
import { ShoppingCartSimple } from 'phosphor-react'

interface ProductProps {
  title: string
  description: string
  tags: TagType[]
  price: number
  image: string
}

export function Product({
  title,
  description,
  image,
  tags,
  price,
}: ProductProps) {
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
        <AddToBasketForm>
          <QuantityControl />
          <button type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </AddToBasketForm>
      </footer>
    </ProductContainer>
  )
}
