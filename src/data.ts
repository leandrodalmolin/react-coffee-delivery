import TraditionalEspressoImg from './assets/products/traditional-espresso.png'
import AmericanoEspressoImg from './assets/products/americano-espresso.png'
import CreamyEspressoImg from './assets/products/creamy-espresso.png'
import IcedEspressoImg from './assets/products/iced-espresso.png'
import CoffeeWithMilkImg from './assets/products/coffee-with-milk.png'
import LatteImg from './assets/products/latte.png'
import CapuccinoImg from './assets/products/capuccino.png'
import MacchiatoImg from './assets/products/macchiato.png'
import MocaccinoImg from './assets/products/mocaccino.png'
import HotChocolateImg from './assets/products/hot-chocolate.png'
import CubanImg from './assets/products/cuban.png'
import HawaiianImg from './assets/products/hawaiian.png'
import ArabicImg from './assets/products/arabic.png'
import IrishImg from './assets/products/irish.png'

export type TagType =
  | 'Traditional'
  | 'Cold'
  | 'With Milk'
  | 'Alcoholic'
  | 'Special'

export interface ProductType {
  id: string
  title: string
  description: string
  tags: TagType[]
  price: number
  image: string
}

export const productsData: ProductType[] = [
  {
    id: 'p1',
    title: 'Traditional Espresso',
    description: 'Traditional coffee made with hot water and ground beans',
    tags: ['Traditional'],
    price: 2.9,
    image: TraditionalEspressoImg,
  },
  {
    id: 'p2',
    title: 'Americano Espresso',
    description: 'Diluted espresso, less intense than traditional',
    tags: ['Traditional'],
    price: 3.2,
    image: AmericanoEspressoImg,
  },
  {
    id: 'p3',
    title: 'Creamy Espresso',
    description: 'Traditional espresso with creamy foam',
    tags: ['Traditional'],
    price: 3.99,
    image: CreamyEspressoImg,
  },
  {
    id: 'p4',
    title: 'Iced Espresso',
    description: 'Drink prepared with espresso coffee and ice cubes',
    tags: ['Traditional', 'Cold'],
    price: 3.45,
    image: IcedEspressoImg,
  },
  {
    id: 'p5',
    title: 'Coffee with Milk',
    description: 'Half and half traditional espresso with steamed milk',
    tags: ['Traditional', 'With Milk'],
    price: 4,
    image: CoffeeWithMilkImg,
  },
  {
    id: 'p6',
    title: 'Latte',
    description: 'A shot of espresso with twice the milk and creamy foam',
    tags: ['Traditional', 'With Milk'],
    price: 3.5,
    image: LatteImg,
  },
  {
    id: 'p7',
    title: 'Capuccino',
    description:
      'Cinnamon drink made from equal doses of coffee, milk and foam',
    tags: ['Traditional', 'With Milk'],
    price: 4,
    image: CapuccinoImg,
  },
  {
    id: 'p8',
    title: 'Macchiato',
    description: 'Espresso coffee mixed with hot milk and foam',
    tags: ['Traditional', 'With Milk'],
    price: 4,
    image: MacchiatoImg,
  },
  {
    id: 'p9',
    title: 'Mocaccino',
    description: 'Espresso coffee with chocolate sauce, milk and foam',
    tags: ['Traditional', 'With Milk'],
    price: 3.5,
    image: MocaccinoImg,
  },
  {
    id: 'p10',
    title: 'Hot Chocolate',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    tags: ['Special', 'With Milk'],
    price: 2.8,
    image: HotChocolateImg,
  },
  {
    id: 'p11',
    title: 'Cuban',
    description: 'Iced espresso drink with rum, cream and mint',
    tags: ['Special', 'Alcoholic', 'Cold'],
    price: 4.5,
    image: CubanImg,
  },
  {
    id: 'p12',
    title: 'Hawaiian',
    description: 'Sweet drink prepared with coffee and coconut milk',
    tags: ['Special'],
    price: 4.5,
    image: HawaiianImg,
  },
  {
    id: 'p13',
    title: 'Arabic',
    description: 'Drink prepared with Arabic coffee beans and spices',
    tags: ['Special'],
    price: 2.8,
    image: ArabicImg,
  },
  {
    id: 'p14',
    title: 'Irish',
    description:
      'Drink based on coffee, Irish whiskey, sugar and whipped cream',
    tags: ['Special', 'Alcoholic'],
    price: 5,
    image: IrishImg,
  },
]
