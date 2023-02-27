import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Heading } from '.'
import { defaultTheme } from '../../styles/themes/default'

describe('Heading Component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h1">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByText('Heading text')).toBeInTheDocument()
  })

  it('renders a heading role element', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h1">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('renders the heading element according to variant value', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h4">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
  })
})
