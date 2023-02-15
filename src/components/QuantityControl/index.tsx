import { useFormContext } from 'react-hook-form'
import { Minus, Plus } from 'phosphor-react'
import { InputNumber, QuantityControlContainer } from './styles'
import { FormInputs } from '../../pages/Home/components/ProductsList/Product'

export function QuantityControl() {
  const { register, getValues, setValue } = useFormContext<FormInputs>()

  function onIncrementQuantity() {
    if (getValues('quantity') < 99) {
      setValue('quantity', getValues('quantity') + 1)
    }
  }

  function onDecrementQuantity() {
    if (getValues('quantity') > 0) {
      setValue('quantity', getValues('quantity') - 1)
    }
  }

  return (
    <QuantityControlContainer>
      <button type="button" onClick={onDecrementQuantity}>
        <Minus weight="bold" />
        <span className="visually-hidden">Decrement floor</span>
      </button>

      <InputNumber type="number" min={0} max={99} {...register('quantity')} />

      <button type="button" onClick={onIncrementQuantity}>
        <Plus weight="bold" />
        <span className="visually-hidden">Increment floor</span>
      </button>
    </QuantityControlContainer>
  )
}
