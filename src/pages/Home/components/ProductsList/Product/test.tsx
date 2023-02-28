import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Product } from '.'
import { defaultTheme } from '../../../../../styles/themes/default'

describe('Product Component', () => {
  it('renders product correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Product
          id="1"
          title="Coffee Title"
          description="Coffee description"
          image="image.png"
          price={2.5}
          tags={['Traditional', 'Special']}
        />
      </ThemeProvider>,
    )

    expect(screen.getByText('Coffee Title')).toBeInTheDocument()
  })
})
