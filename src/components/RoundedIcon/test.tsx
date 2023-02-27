import { render, screen } from '@testing-library/react'
import { RoundedIcon } from '.'

describe('RoundedIcon Component', () => {
  it('renders children elements correctly', () => {
    render(
      <RoundedIcon>
        <p>Icon placeholder</p>
      </RoundedIcon>,
    )

    expect(screen.getByText('Icon placeholder')).toBeInTheDocument()
  })
})
