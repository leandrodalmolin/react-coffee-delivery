import { DeliveryAddressContainer, FormControl } from './styles'
import { TextInput } from './TextInput'

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <FormControl className="span-full">
        <TextInput field="street" label="House number and street name" />
      </FormControl>

      <FormControl>
        <TextInput field="city" label="Town / City" />
      </FormControl>

      <FormControl optional>
        <TextInput field="county" label="County" />
      </FormControl>

      <FormControl>
        <TextInput field="postcode" label="Postcode" />
      </FormControl>
    </DeliveryAddressContainer>
  )
}
