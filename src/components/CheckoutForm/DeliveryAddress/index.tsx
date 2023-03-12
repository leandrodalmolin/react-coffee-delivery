import { DeliveryAddressContainer, FormControl } from './styles'
import { FormInput } from '../../FormInput'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <DeliveryAddressContainer>
      <FormControl className="span-full">
        <FormInput
          field="street"
          label="House number and street name"
          register={{ ...register('street') }}
          errorMessage={
            errors.street ? (errors.street.message as string) : null
          }
        />
      </FormControl>

      <FormControl>
        <FormInput
          field="city"
          label="Town / City"
          register={{ ...register('city') }}
          errorMessage={errors.city ? (errors.city.message as string) : null}
        />
      </FormControl>

      <FormControl optional>
        <FormInput
          field="county"
          label="County"
          register={{ ...register('county') }}
          errorMessage={
            errors.county ? (errors.county.message as string) : null
          }
        />
      </FormControl>

      <FormControl>
        <FormInput
          field="postcode"
          label="Postcode"
          register={{ ...register('postcode') }}
          errorMessage={
            errors.postcode ? (errors.postcode.message as string) : null
          }
        />
      </FormControl>
    </DeliveryAddressContainer>
  )
}
