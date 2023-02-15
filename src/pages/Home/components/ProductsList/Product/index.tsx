import { useContext } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import {
  BasketContext,
  Product as ProductType,
} from '../../../../../contexts/BasketContext'
import { TagsList } from './TagsList'
import { HeadingMD } from '../../../../../styles/typography'
import { PriceTag } from './PriceTag'
import { QuantityInput } from '../../../../../components/QuantityInput'
import { ShoppingCartSimple } from 'phosphor-react'

import { ProductContainer, AddToBasketForm } from './styles'

// eslint-disable-next-line prettier/prettier
interface ProductProps extends ProductType { }

export type FormInputs = {
  id: string
  title: string
  price: number
  quantity: number
}

export function Product({
  id,
  title,
  description,
  image,
  tags,
  price,
}: ProductProps) {
  const { addItemToBasket } = useContext(BasketContext)
  const formMethods = useForm<FormInputs>({
    defaultValues: {
      id,
      title,
      price,
      quantity: 0,
    },
  })
  const { register, handleSubmit } = formMethods

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { id, title, price, quantity } = data

    addItemToBasket({
      id,
      title,
      price,
      quantity,
    })
  }

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
        <FormProvider {...formMethods}>
          <AddToBasketForm onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register('id')} />
            <input type="hidden" {...register('title')} />
            <input type="hidden" {...register('price')} />
            <QuantityInput />
            <button type="submit">
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </AddToBasketForm>
        </FormProvider>
      </footer>
    </ProductContainer>
  )
}
