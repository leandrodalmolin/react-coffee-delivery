import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z, ZodSchema } from 'zod'
import { QuantityInput } from '../../../../../../components/QuantityInput'
import { BasketContext } from '../../../../../../contexts/BasketContext'
import { ProductType } from '../../../../../../data'
import { BasketItem } from '../../../../../../reducers/basket'
import { BasketFormContainer } from './style'

const basketFormSchema: ZodSchema<BasketItem> = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number().min(1).max(99),
  image: z.string(),
})

type CheckoutFormInputs = z.infer<typeof basketFormSchema>

interface BasketFormProps {
  product: ProductType
}

export function BasketForm({ product }: BasketFormProps) {
  const { addBasketItem, updateBasketItem, findBasketItemById } =
    useContext(BasketContext)

  const { register, handleSubmit, control, reset } =
    useForm<CheckoutFormInputs>({
      resolver: zodResolver(basketFormSchema),
      defaultValues: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    })

  const onFormSubmit: SubmitHandler<CheckoutFormInputs> = (submittedItem) => {
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

  function isQuantityValid(value: number) {
    const { success } = basketFormSchema.safeParse({
      ...product,
      quantity: value,
    })

    // TODO: add proper feedback
    if (!success) {
      console.error('Invalid quantity')
    }

    return success
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
            onChange={(e) =>
              isQuantityValid(Number(e.target.value)) &&
              onChange(Number(e.target.value))
            }
            onIncrement={() =>
              isQuantityValid(value + 1) && onChange(value + 1)
            }
            onDecrement={() =>
              isQuantityValid(value - 1) && onChange(value - 1)
            }
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
