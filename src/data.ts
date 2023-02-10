import TraditionalEspressoImg from './assets/products/traditional-espresso.png'

type Tag = 'Traditional' | 'Cold' | 'With Milk' | 'Alcoholic' | 'Special'

export interface Product {
  id: string
  title: string
  description: string
  tags: Tag[]
  price: number
  image: string
}

export const productsData: Product[] = [
  {
    id: 'p1',
    title: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    tags: ['Traditional'],
    price: 8.99,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p2',
    title: 'Americano',
    description: 'Diluted espresso, less intense than traditional',
    tags: ['Traditional'],
    price: 19.99,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p3',
    title: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    tags: ['Traditional'],
    price: 3.99,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p4',
    title: 'Iced Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    tags: ['Traditional', 'Cold'],
    price: 89.5,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p5',
    title: 'Coffee with Milk',
    description: 'Half and half traditional espresso with steamed milk',
    tags: ['Traditional', 'With Milk'],
    price: 7.5,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p6',
    title: 'Latte',
    description: 'A shot of espresso with twice the milk and creamy foam',
    tags: ['Traditional', 'With Milk'],
    price: 1,
    image: TraditionalEspressoImg,
  },
]
