import { v4 as uuidv4 } from 'uuid'
import { HeadingMD } from '../../styles/typography'
import { CardContainer, CardFooter, TagContainer } from './styles'

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
      <img src={image} alt={title} />
      <TagContainer>
        {tags.map((tag) => (
          <li key={uuidv4()}>{tag}</li>
        ))}
      </TagContainer>
      <HeadingMD>{title}</HeadingMD>
      <p>{description}</p>
      <CardFooter>
        <div>
          <span>£</span>
          {price}
        </div>
        <form>
          <div>
            <label htmlFor=""></label>
            <input type="number" />
          </div>
          <button type="submit">Cart</button>
        </form>
      </CardFooter>
    </CardContainer>
  )
}
