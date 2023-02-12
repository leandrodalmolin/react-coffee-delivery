import { DeliveryAddressFormContainer } from './styles'

export function DeliveryAddressForm() {
  return (
    <>
      <DeliveryAddressFormContainer>
        <div className="span-full">
          <label htmlFor="street-address" className="visually-hidden">
            House number and street name
          </label>
          <input
            type="text"
            name="street-address"
            id="street-address"
            placeholder="House number and street name"
          />
        </div>

        <div>
          <label htmlFor="city" className="visually-hidden">
            Town / City
          </label>
          <input type="text" name="city" id="city" placeholder="Town / City" />
        </div>

        <div>
          <label htmlFor="county" className="visually-hidden">
            County (Optional)
          </label>
          <input
            type="text"
            name="county"
            id="county"
            placeholder="County (Optional)"
          />
        </div>

        <div>
          <label htmlFor="post-code" className="visually-hidden">
            Postcode
          </label>
          <input
            type="text"
            name="post-code"
            id="post-code"
            placeholder="Postcode"
          />
        </div>
      </DeliveryAddressFormContainer>
    </>
  )
}
