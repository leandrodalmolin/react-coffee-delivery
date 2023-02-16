import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  BasketContext,
  Product as ProductType,
} from '../../../../../contexts/BasketContext'
import { TagsList } from './TagsList'
import { HeadingMD } from '../../../../../styles/typography'
import { PriceTag } from './PriceTag'
import { ShoppingCartSimple } from 'phosphor-react'
import { ProductContainer, AddToBasketForm } from './styles'
import { QuantityInput } from '../../../../../components/QuantityInput'
import { BasketItem } from '../../../../../reducers/basket'

// eslint-disable-next-line prettier/prettier
interface ProductProps extends ProductType { }
type FormInputs = BasketItem

export function Product(product: ProductProps) {
  const { id, title, description, image, tags, price } = product
  const { addItemToBasket } = useContext(BasketContext)

  const { register, handleSubmit, control } = useForm<FormInputs>({
    defaultValues: {
      id,
      title,
      price,
      quantity: 0,
      image,
    },
  })

  const onFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    addItemToBasket({
      id: formData.id,
      title: formData.title,
      price: formData.price,
      quantity: formData.quantity,
      image: formData.image,
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
        <AddToBasketForm onSubmit={handleSubmit(onFormSubmit)}>
          <input type="hidden" {...register('id')} />
          <input type="hidden" {...register('title')} />
          <input type="hidden" {...register('price')} />
          <input type="hidden" {...register('image')} />

          <Controller
            name="quantity"
            control={control}
            render={({ field: { onChange, value } }) => (
              <QuantityInput
                onChange={(e) => onChange(Number(e.target.value))}
                onIncrement={() => value < 99 && onChange(value + 1)}
                onDecrement={() => value > 0 && onChange(value - 1)}
                quantity={value}
              />
            )}
          />

          <button type="submit">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </AddToBasketForm>
      </footer>
    </ProductContainer>
  )
}
