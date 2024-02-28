import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z, ZodSchema } from 'zod'
import { QuantityInput } from '../../QuantityInput'
import {
  BasketContext,
  QUANTITY_THRESHOLD_MAX,
  QUANTITY_THRESHOLD_MIN,
} from '../../../contexts/BasketContext'
import { IProduct } from '../../../data'
import { useToast } from '../../../hooks/useToast'
import { IBasketItem } from '../../../reducers/basket/reducer'
import { BasketFormContainer } from './style'

const basketFormSchema: ZodSchema<IBasketItem> = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  quantity: z.number().min(QUANTITY_THRESHOLD_MIN).max(QUANTITY_THRESHOLD_MAX),
  image: z.string(),
})

type CheckoutFormInputs = z.infer<typeof basketFormSchema>

interface IBasketFormProps {
  product: IProduct
}

export function BasketForm({ product }: IBasketFormProps) {
  const toast = useToast()

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

      if (newQuantity > QUANTITY_THRESHOLD_MAX) {
        const remainingQuantity = QUANTITY_THRESHOLD_MAX - item.quantity

        toast({
          title: 'Quantity Limit',
          description: `You can only add ${remainingQuantity} more of this product to the basket.`,
          type: 'foreground',
        })
        return
      }

      updateBasketItem({ ...submittedItem, quantity: newQuantity })
    }

    // Add new item
    else {
      addBasketItem({ ...submittedItem })
    }

    toast({
      title: 'Basket Updated',
      description: `${product.title} has been added to your basket.`,
      actionComponent: <Link to="/checkout">View basket</Link>,
      actionAltText: 'View Basket',
      type: 'foreground',
    })

    reset()
  }

  function isQuantityValid(value: number) {
    const { success } = basketFormSchema.safeParse({
      ...product,
      quantity: value,
    })

    if (!success) {
      toast({
        title: 'Invalid Quantity',
        description: `Quantity must be between ${QUANTITY_THRESHOLD_MIN} and ${QUANTITY_THRESHOLD_MAX}.`,
        type: 'foreground',
      })
    }

    return success
  }

  return (
    <>
      <BasketFormContainer
        data-testid="basket-form"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input type="hidden" {...register('id')} />
        <input type="hidden" {...register('title')} />
        <input type="hidden" {...register('price')} />
        <input type="hidden" {...register('image')} />

        <Controller
          name="quantity"
          control={control}
          render={({ field: { onChange, value } }) => (
            <QuantityInput
              quantity={value}
              disableDecrementButton={value === QUANTITY_THRESHOLD_MIN}
              disableIncrementButton={value >= QUANTITY_THRESHOLD_MAX}
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
            />
          )}
        />

        <button type="submit">
          <ShoppingCartSimple size={22} weight="fill" />
          <span className="visually-hidden">Add to basket</span>
        </button>
      </BasketFormContainer>
    </>
  )
}
