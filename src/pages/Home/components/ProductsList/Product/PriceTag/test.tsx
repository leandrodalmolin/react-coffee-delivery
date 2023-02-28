import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { PriceTag } from '.'
import { defaultTheme } from '../../../../../../styles/themes/default'

describe('PriceTag Component', () => {
  it('renders price using the right format', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <PriceTag price={2.5} />
      </ThemeProvider>,
    )

    expect(screen.getByText('2.50')).toBeInTheDocument()
  })

  it('renders currency symbol', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <PriceTag price={2.5} />
      </ThemeProvider>,
    )

    expect(screen.getByText('£')).toBeInTheDocument()
  })
})
