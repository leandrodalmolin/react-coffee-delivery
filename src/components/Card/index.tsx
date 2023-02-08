import { HeadingMD } from '../../styles/typography'
import { CardForm } from './CardForm'
import { PriceTag } from './PriceTag'
import { CardContainer, CardFooter } from './styles'
import { TagsList } from './TagsList'

interface CardProps {
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Card({ title, description, tags, price, image }: CardProps) {
  return (
    <CardContainer>
      <div>
        <img src={image} alt={title} />
        <TagsList tags={tags} />
        <HeadingMD>{title}</HeadingMD>
        <p>{description}</p>
      </div>
      <CardFooter>
        <PriceTag price={price} />
        <CardForm />
      </CardFooter>
    </CardContainer>
  )
}
