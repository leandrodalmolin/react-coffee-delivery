import { render, screen } from '@testing-library/react'
import { FormInput } from '.'

describe('FormInput Component', () => {
  it('renders correctly', () => {
    render(<FormInput field="city" label="Town / City" />)
    expect(screen.getByText('Town / City')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(
      <FormInput
        field="city"
        label="Town / City"
        errorMessage="Please enter city name"
      />,
    )

    expect(screen.getByText('Please enter city name')).toBeInTheDocument()
  })
})
