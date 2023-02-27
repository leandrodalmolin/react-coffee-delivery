import { render, screen } from '@testing-library/react'
import { Wrapper } from '.'

describe('Wrapper Component', () => {
  it('renders children elements correctly', () => {
    render(
      <Wrapper>
        <p>Internal content</p>
      </Wrapper>,
    )

    expect(screen.getByText('Internal content')).toBeInTheDocument()
  })
})
