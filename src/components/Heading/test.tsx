import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Heading } from '.'
import { defaultTheme } from '../../styles/themes/default'

describe('Heading Component', () => {
  it('renders right role level for variant h1', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h1">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders right role level for variant h2', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h2">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders right role level for variant h3', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h3">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('renders right role level for variant h4', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h4">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
  })

  it('renders right role level for variant h5', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h5">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
  })

  it('renders right role level for variant h6', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading variant="h6">Heading text</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument()
  })
})
