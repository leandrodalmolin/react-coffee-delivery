import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { BasketContext } from '../../../../../../contexts/BasketContext'
import { ProductType } from '../../../../../../data'
import { BasketItem } from '../../../../../../reducers/basket'
import { BasketFormContainer } from './style'

type FormInputs = BasketItem

interface BasketFormProps {
  product: ProductType
}

export function BasketForm({ product }: BasketFormProps) {
  const { id, title, image, price } = product

  const { addBasketItem, updateBasketItem, findBasketItemById } =
    useContext(BasketContext)

  const { register, handleSubmit, control, reset } = useForm<FormInputs>({
    defaultValues: {
      id,
      title,
      price,
      quantity: 0,
      image,
    },
  })

  const onFormSubmit: SubmitHandler<FormInputs> = (submittedItem) => {
    // TODO: add proper feedback
    if (submittedItem.quantity === 0) {
      alert('Enter quantity')
      return
    }

    const item = findBasketItemById(submittedItem.id)

    // Update item
    if (item) {
      const newQuantity = item.quantity + submittedItem.quantity
      updateBasketItem({ ...submittedItem, quantity: newQuantity })
    }

    // Add new item
    else {
      addBasketItem({ ...submittedItem })
    }

    reset()
  }

  return (
    <BasketFormContainer onSubmit={handleSubmit(onFormSubmit)}>
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
    </BasketFormContainer>
  )
}
