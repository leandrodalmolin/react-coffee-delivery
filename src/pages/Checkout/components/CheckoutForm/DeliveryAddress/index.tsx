import { useFormContext } from 'react-hook-form'
import { CheckoutFormInputs } from '..'
import { ErrorMessage } from '../styles'
import { DeliveryAddressContainer } from './styles'

export function DeliveryAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormInputs>()

  return (
    <DeliveryAddressContainer>
      <div className="span-full">
        <label htmlFor="street" className="visually-hidden">
          House number and street name
        </label>
        <input
          {...register('street')}
          placeholder="House number and street name"
          aria-invalid={errors.street ? 'true' : 'false'}
        />
        {errors.street && (
          <ErrorMessage role="alert">{errors.street.message}</ErrorMessage>
        )}
      </div>

      <div>
        <label htmlFor="city" className="visually-hidden">
          Town / City
        </label>
        <input
          {...register('city')}
          placeholder="Town / City"
          aria-invalid={errors.city ? 'true' : 'false'}
        />
        {errors.city && (
          <ErrorMessage role="alert">{errors.city.message}</ErrorMessage>
        )}
      </div>

      <div>
        <label htmlFor="county" className="visually-hidden">
          County (Optional)
        </label>
        <input {...register('county')} placeholder="County (Optional)" />
      </div>

      <div>
        <label htmlFor="postcode" className="visually-hidden">
          Postcode
        </label>
        <input
          {...register('postcode')}
          placeholder="Postcode"
          aria-invalid={errors.postcode ? 'true' : 'false'}
        />
        {errors.postcode && (
          <ErrorMessage role="alert">{errors.postcode.message}</ErrorMessage>
        )}
      </div>
    </DeliveryAddressContainer>
  )
}
