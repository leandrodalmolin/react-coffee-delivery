import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Success } from '.'
import { defaultTheme } from '../../styles/themes/default'

const mockUseLocationValues = {
  state: {
    street: 'St Thomas',
    city: 'Bristol',
    payment: 'credit',
  },
}

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockImplementation(() => mockUseLocationValues),
  Navigate: jest.fn(),
}))

describe('Success Component', () => {
  it('renders street name correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Success />
      </ThemeProvider>,
    )

    expect(screen.getByText('St Thomas')).toBeInTheDocument()
  })

  it('renders city name correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Success />
      </ThemeProvider>,
    )

    expect(screen.getByText('Bristol')).toBeInTheDocument()
  })

  it('renders payment label correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Success />
      </ThemeProvider>,
    )

    expect(screen.getByText('Credit Card')).toBeInTheDocument()
  })

  it('redirects to home page when traffic is not coming from checkout page', () => {
    // @ts-ignore
    mockUseLocationValues.state = null

    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Success />
      </ThemeProvider>,
    )

    // Does not render anything since empty state guarding clause
    // is reached and user is redirected away to the home page
    expect(container.childElementCount).toEqual(0)
  })
})
