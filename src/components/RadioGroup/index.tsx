import { Icon } from 'phosphor-react'
import { RadioItem, RadioRoot } from './styles'

interface IRadioGroupProps {
  options: {
    label: string
    value: string
    iconComponent: Icon
    isInvalid: boolean
  }[]
  onChange: () => void
}

export function RadioGroup({ options, onChange }: IRadioGroupProps) {
  return (
    <RadioRoot aria-label="Payment Options" onValueChange={onChange}>
      {options.map((option) => (
        <RadioItem
          key={option.value}
          value={option.value}
          aria-invalid={option.isInvalid ? 'true' : 'false'}
        >
          <option.iconComponent size={16} />
          {option.label}
        </RadioItem>
      ))}
    </RadioRoot>
  )
}
