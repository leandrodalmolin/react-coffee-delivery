import { render, screen } from '@testing-library/react'
import { TextInput } from '.'

const mockFormState = {
  errors: {},
}

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    register: jest.fn(),
    formState: { ...mockFormState },
  }),
}))

describe('TextInput Component', () => {
  it('renders correctly', () => {
    render(<TextInput field="city" label="Town / City" />)
    expect(screen.getByText('Town / City')).toBeInTheDocument()
  })

  it('shows error message', () => {
    mockFormState.errors = {
      city: {
        message: 'Please enter city name',
      },
    }

    render(<TextInput field="city" label="Town / City" />)

    expect(screen.getByText('Please enter city name')).toBeInTheDocument()
  })
})
