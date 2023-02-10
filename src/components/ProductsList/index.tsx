import { v4 as uuidv4 } from 'uuid'
import { HeadingLG, HeadingMD } from '../../styles/typography'
import { ProductsListContainer } from './styles'
import TraditionalEspressoImg from '../../assets/products/traditional-espresso.png'
import { Card } from '../Card'
import { CardFooter } from '../Card/CardFooter'
import { PriceTag } from '../PriceTag'
import { AddToBasketForm } from '../AddToBasketForm'
import { TagsList } from '../TagsList'
import { CardBody } from '../Card/CardBody'

type Tag = 'Traditional' | 'Cold' | 'With Milk' | 'Alcoholic' | 'Special'

export interface Product {
  id: string
  title: string
  description: string
  tags: Tag[]
  price: number
  image: string
}

const PRODUCTS: Product[] = [
  {
    id: uuidv4(),
    title: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    tags: ['Traditional'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
  {
    id: uuidv4(),
    title: 'Americano',
    description: 'Diluted espresso, less intense than traditional',
    tags: ['Traditional'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
  {
    id: uuidv4(),
    title: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    tags: ['Traditional'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
  {
    id: uuidv4(),
    title: 'Iced Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    tags: ['Traditional', 'Cold'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
  {
    id: uuidv4(),
    title: 'Coffee with Milk',
    description: 'Half and half traditional espresso with steamed milk',
    tags: ['Traditional', 'With Milk'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
  {
    id: uuidv4(),
    title: 'Latte',
    description: 'A shot of espresso with twice the milk and creamy foam',
    tags: ['Traditional', 'With Milk'],
    price: 9.99,
    image: TraditionalEspressoImg,
  },
]

export function ProductsList() {
  return (
    <>
      <HeadingLG>Our Coffees</HeadingLG>
      <ProductsListContainer>
        {PRODUCTS.map(({ id, title, description, image, price, tags }) => (
          <Card key={id}>
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
